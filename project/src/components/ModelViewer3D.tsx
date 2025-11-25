import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ModelViewer3DProps {
  file?: File;
  optimized?: boolean;
  label?: string;
}

export default function ModelViewer3D({ file, optimized = false, label = '3D Model' }: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Group | THREE.Mesh | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const animationIdRef = useRef<number>();

  // Initialize scene
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a2e);
      sceneRef.current = scene;

      // Camera setup
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 0, 4);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0x3b82f6, 0.5);
      pointLight.position.set(-5, 3, 5);
      scene.add(pointLight);

      // Default geometry
      const defaultGeometry = new THREE.IcosahedronGeometry(1, 4);
      const material = new THREE.MeshPhongMaterial({
        color: optimized ? 0x22c55e : 0xf97316,
        emissive: optimized ? 0x16a34a : 0xea580c,
        shininess: 100,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(defaultGeometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.005;
          meshRef.current.rotation.y += 0.008;
        }
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current || !camera || !renderer) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        defaultGeometry.dispose();
        material.dispose();
      };
    } catch (err) {
      setError('Failed to initialize 3D viewer');
      console.error(err);
    }
  }, [optimized]);

  // Load uploaded file
  useEffect(() => {
    if (!file || !sceneRef.current) return;

    setIsLoading(true);
    setError(null);

    const reader = new FileReader();
    const fileType = file.type;
    const fileName = file.name.toLowerCase();

    reader.onload = async (event) => {
      try {
        const data = event.target?.result;
        if (!data) throw new Error('Failed to read file');

        let loadedObject: THREE.Group | THREE.Mesh | null = null;

        // Handle OBJ files
        if (fileName.endsWith('.obj') || fileType === 'text/plain') {
          const text = typeof data === 'string' ? data : new TextDecoder().decode(data as ArrayBuffer);
          const objLoader = new OBJLoader();
          loadedObject = objLoader.parse(text);
        }
        // Handle GLTF/GLB files
        else if (fileName.endsWith('.gltf') || fileName.endsWith('.glb') || fileType === 'model/gltf+json' || fileType === 'model/gltf-binary') {
          const gltfLoader = new GLTFLoader();
          try {
            const gltf = await new Promise<any>((resolve, reject) => {
              gltfLoader.parse(data as ArrayBuffer, '', resolve, reject);
            });
            loadedObject = gltf.scene;
          } catch {
            const arrayBuffer = data instanceof ArrayBuffer ? data : Buffer.from(data as string);
            const gltf = await new Promise<any>((resolve, reject) => {
              gltfLoader.parse(arrayBuffer, '', resolve, reject);
            });
            loadedObject = gltf.scene;
          }
        }
        // Fallback: try OBJ parser
        else {
          const text = typeof data === 'string' ? data : new TextDecoder().decode(data as ArrayBuffer);
          const objLoader = new OBJLoader();
          loadedObject = objLoader.parse(text);
        }

        if (!loadedObject) throw new Error('Failed to parse model');

        // Remove old mesh
        if (meshRef.current && sceneRef.current) {
          sceneRef.current.remove(meshRef.current);
          if (meshRef.current instanceof THREE.Mesh) {
            meshRef.current.geometry?.dispose();
            if (Array.isArray(meshRef.current.material)) {
              meshRef.current.material.forEach(m => m.dispose());
            } else {
              meshRef.current.material?.dispose();
            }
          }
        }

        // Apply material to all meshes
        loadedObject.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: optimized ? 0x22c55e : 0xf97316,
              emissive: optimized ? 0x16a34a : 0xea580c,
              shininess: 100,
              side: THREE.DoubleSide,
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(loadedObject);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        loadedObject.position.sub(center);
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = cameraRef.current!.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.2;

        if (cameraRef.current) {
          cameraRef.current.position.z = cameraZ;
          cameraRef.current.lookAt(loadedObject.position);
        }

        sceneRef.current?.add(loadedObject);
        meshRef.current = loadedObject;
        setIsLoading(false);
      } catch (err) {
        console.error('Model loading error:', err);
        setError('Could not load model. Try OBJ or GLB format.');
        setIsLoading(false);
      }
    };

    if (file.type.includes('gltf') || file.name.endsWith('.glb')) {
      reader.readAsArrayBuffer(file);
    } else {
      reader.readAsText(file);
    }
  }, [file, optimized]);

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-cyan-400 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-300">Loading Model...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
          <div className="text-center px-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        </div>
      )}

      <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-lg border border-gray-700 z-5">
        <p className="text-xs font-semibold text-gray-300">{label}</p>
      </div>
    </div>
  );
}
