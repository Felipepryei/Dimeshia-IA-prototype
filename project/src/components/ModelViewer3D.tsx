import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

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
  const meshRef = useRef<THREE.Mesh | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a2e);
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 3);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Default geometry (if no file loaded)
      const defaultGeometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: optimized ? 0x22c55e : 0xf97316,
        emissive: optimized ? 0x16a34a : 0xea580c,
        shininess: 100,
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
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        renderer.dispose();
        defaultGeometry.dispose();
        material.dispose();
        containerRef.current?.removeChild(renderer.domElement);
      };
    } catch (err) {
      setError('Failed to initialize 3D viewer');
      console.error(err);
    }
  }, [optimized]);

  // Handle file loading
  useEffect(() => {
    if (!file || !sceneRef.current || !cameraRef.current) return;

    setIsLoading(true);
    setError(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const arrayBuffer = event.target?.result as ArrayBuffer;
        const geometry = createGeometryFromBuffer(arrayBuffer, file.type);

        if (meshRef.current) {
          sceneRef.current?.remove(meshRef.current);
          meshRef.current.geometry.dispose();
        }

        const material = new THREE.MeshPhongMaterial({
          color: optimized ? 0x22c55e : 0xf97316,
          emissive: optimized ? 0x16a34a : 0xea580c,
          shininess: 100,
        });

        const mesh = new THREE.Mesh(geometry, material);
        
        // Center and scale the model
        geometry.computeBoundingBox();
        if (geometry.boundingBox) {
          geometry.center();
          const size = geometry.boundingBox.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.5 / maxDim;
          mesh.scale.multiplyScalar(scale);
        }

        sceneRef.current?.add(mesh);
        meshRef.current = mesh;
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load 3D model');
        console.error(err);
        setIsLoading(false);
      }
    };
    reader.readAsArrayBuffer(file);
  }, [file, optimized]);

  const createGeometryFromBuffer = (buffer: ArrayBuffer, fileType: string): THREE.BufferGeometry => {
    // Simple geometry creation from buffer
    // For OBJ files, parse vertices and faces
    const view = new Uint8Array(buffer);
    const text = new TextDecoder().decode(view);

    if (fileType.includes('obj')) {
      return parseOBJ(text);
    }

    // Default fallback - create a procedural shape
    const geometry = new THREE.IcosahedronGeometry(1, 4);
    return geometry;
  };

  const parseOBJ = (text: string): THREE.BufferGeometry => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const normals: number[] = [];

    const lines = text.split('\n');
    for (const line of lines) {
      if (line.startsWith('v ')) {
        const parts = line.split(/\s+/);
        vertices.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
      } else if (line.startsWith('vn ')) {
        const parts = line.split(/\s+/);
        normals.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
      }
    }

    if (vertices.length > 0) {
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    }
    if (normals.length > 0) {
      geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
    } else {
      geometry.computeVertexNormals();
    }

    return geometry;
  };

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-cyan-400 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-300">Loading 3D Model...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        </div>
      )}

      <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-lg border border-gray-700">
        <p className="text-xs font-semibold text-gray-300">{label}</p>
      </div>
    </div>
  );
}
