import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelViewer3DProps {
  file?: File;
  optimized?: boolean;
  label?: string;
}

export default function ModelViewer3D({ file, optimized = false, label = '3D Model' }: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Object3D | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number>();
  const [error, setError] = useState<string | null>(null);

  // Scene initialization
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a2e);

      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        10000
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      // Default cube
      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const material = new THREE.MeshPhongMaterial({
        color: optimized ? 0x22c55e : 0xf97316,
        emissive: optimized ? 0x16a34a : 0xea580c,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;
      meshRef.current = mesh;

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.005;
          meshRef.current.rotation.y += 0.008;
        }
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    } catch (err) {
      console.error('Scene setup error:', err);
      setError('Failed to initialize viewer');
    }
  }, [optimized]);

  // Model loading
  useEffect(() => {
    if (!file || !sceneRef.current || !cameraRef.current) return;

    setError(null);
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const content = event.target?.result;
        if (!content) throw new Error('No file content');

        const fileName = file.name.toLowerCase();
        let object: THREE.Object3D | null = null;

        try {
          if (fileName.endsWith('.obj')) {
            const text = typeof content === 'string' ? content : new TextDecoder().decode(content as ArrayBuffer);
            const objLoader = new OBJLoader();
            object = objLoader.parse(text);
          } else if (fileName.endsWith('.glb') || fileName.endsWith('.gltf')) {
            const gltfLoader = new GLTFLoader();
            const arrayBuffer = content instanceof ArrayBuffer ? content : new TextEncoder().encode(content as string).buffer;
            gltfLoader.parse(
              arrayBuffer,
              '',
              (gltf) => {
                object = gltf.scene;
                applyModel(object);
              },
              (err) => {
                setError('Failed to load GLB/GLTF file');
                console.error(err);
              }
            );
            return;
          } else {
            throw new Error('Unsupported file format. Use OBJ or GLB.');
          }

          if (object) {
            applyModel(object);
          }
        } catch (parseErr) {
          setError('Failed to parse model file');
          console.error(parseErr);
        }
      } catch (err) {
        setError('Error reading file');
        console.error(err);
      }
    };

    reader.onerror = () => {
      setError('Failed to read file');
    };

    if (file.name.toLowerCase().endsWith('.glb')) {
      reader.readAsArrayBuffer(file);
    } else {
      reader.readAsText(file);
    }

    function applyModel(object: THREE.Object3D) {
      if (!sceneRef.current || !cameraRef.current) return;

      // Remove old model
      if (meshRef.current && meshRef.current !== sceneRef.current.children[0]) {
        sceneRef.current.remove(meshRef.current);
      }

      // Apply material to all meshes
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: optimized ? 0x22c55e : 0xf97316,
            emissive: optimized ? 0x16a34a : 0xea580c,
            side: THREE.DoubleSide,
          });
        }
      });

      // Center and scale
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      object.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3 / maxDim;
      object.scale.multiplyScalar(scale);

      sceneRef.current.add(object);
      meshRef.current = object;
    }
  }, [file, optimized]);

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="text-center px-4">
            <p className="text-sm text-red-400 font-semibold">{error}</p>
            <p className="text-xs text-red-300 mt-2">Try OBJ or GLB format</p>
          </div>
        </div>
      )}

      <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-lg border border-gray-700 z-10">
        <p className="text-xs font-semibold text-gray-300">{label}</p>
      </div>
    </div>
  );
}
