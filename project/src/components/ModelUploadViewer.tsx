import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Upload, RotateCcw, Zap } from 'lucide-react';
import { createCharacterModel, createProductModel, createSceneModel, createOptimizedModel } from './SampleModels';

const OriginalModel = ({ model }: { model: THREE.Group | null }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  if (!model) return null;

  return (
    <group ref={groupRef}>
      {model.children.map((child, i) => (
        <primitive key={i} object={child.clone()} />
      ))}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
    </group>
  );
};

const OptimizedModel = ({ model }: { model: THREE.Group | null }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  if (!model) return null;

  return (
    <group ref={groupRef}>
      {model.children.map((child, i) => {
        const clonedChild = child.clone();
        if (clonedChild instanceof THREE.Mesh) {
          // Apply optimization material
          clonedChild.material = new THREE.MeshStandardMaterial({
            color: '#8B5CF6',
            metalness: 0.7,
            roughness: 0.3,
            wireframe: false,
          });
        }
        return <primitive key={i} object={clonedChild} />;
      })}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
    </group>
  );
};

export default function ModelUploadViewer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [originalModel, setOriginalModel] = useState<THREE.Group | null>(null);
  const [optimizedModel, setOptimizedModel] = useState<THREE.Group | null>(null);
  const [modelData, setModelData] = useState({
    originalPolygons: 0,
    optimizedPolygons: 0,
    originalSize: 0,
    optimizedSize: 0,
    fileName: '',
    isProcessing: false,
  });

  // Load sample model on mount
  useEffect(() => {
    loadSampleModel('character');
  }, []);

  const calculatePolygonCount = (object: THREE.Object3D): number => {
    let count = 0;
    object.traverse((child) => {
      if (child instanceof THREE.Mesh && child.geometry) {
        const positions = child.geometry.getAttribute('position');
        if (positions) {
          count += positions.count / 3; // Each triangle has 3 vertices
        }
      }
    });
    return Math.round(count);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setModelData((prev) => ({ ...prev, isProcessing: true, fileName: file.name }));

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as ArrayBuffer;
        const geometry = new THREE.BufferGeometry();

        // Simple OBJ parser for demonstration
        if (file.name.endsWith('.obj')) {
          const text = new TextDecoder().decode(content);
          const positions: number[] = [];
          const lines = text.split('\n');

          for (const line of lines) {
            if (line.startsWith('v ')) {
              const parts = line.trim().split(/\s+/);
              positions.push(
                parseFloat(parts[1]),
                parseFloat(parts[2]),
                parseFloat(parts[3])
              );
            }
          }

          if (positions.length > 0) {
            geometry.setAttribute(
              'position',
              new THREE.BufferAttribute(new Float32Array(positions), 3)
            );
            geometry.computeVertexNormals();
          }
        } else {
          // For other formats, create a demo geometry
          const geometry = new THREE.IcosahedronGeometry(2, 4);
          const mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({ color: '#3B82F6' })
          );
          const group = new THREE.Group();
          group.add(mesh);
          setOriginalModel(group);

          const originalPolygons = calculatePolygonCount(group);
          const fileSize = (file.size / 1024).toFixed(1);

          // Simulate optimization (reduce polygons by ~85%)
          const optimizedGeometry = new THREE.IcosahedronGeometry(2, 2);
          const optimizedMesh = new THREE.Mesh(
            optimizedGeometry,
            new THREE.MeshStandardMaterial({
              color: '#8B5CF6',
              metalness: 0.7,
              roughness: 0.3,
            })
          );
          const optimizedGroup = new THREE.Group();
          optimizedGroup.add(optimizedMesh);
          setOptimizedModel(optimizedGroup);

          const optimizedPolygons = calculatePolygonCount(optimizedGroup);

          setModelData((prev) => ({
            ...prev,
            originalPolygons,
            optimizedPolygons,
            originalSize: parseFloat(fileSize),
            optimizedSize: parseFloat((parseFloat(fileSize) * 0.15).toFixed(1)),
            isProcessing: false,
          }));

          return;
        }

        // Create mesh from geometry
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({ color: '#3B82F6' })
        );
        const group = new THREE.Group();
        group.add(mesh);
        setOriginalModel(group);

        const originalPolygons = calculatePolygonCount(group);
        const fileSize = (file.size / 1024).toFixed(1);

        // Simulate optimization
        const decimate = (geo: THREE.BufferGeometry, ratio: number) => {
          const positions = geo.getAttribute('position');
          const newPositions = positions.array.slice(
            0,
            Math.floor((positions.array as ArrayLike<number>).length * ratio)
          );
          const newGeo = geo.clone();
          newGeo.setAttribute(
            'position',
            new THREE.BufferAttribute(
              new Float32Array(newPositions),
              positions.itemSize
            )
          );
          return newGeo;
        };

        const optimizedGeometry = decimate(geometry, 0.15);
        const optimizedMesh = new THREE.Mesh(
          optimizedGeometry,
          new THREE.MeshStandardMaterial({
            color: '#8B5CF6',
            metalness: 0.7,
            roughness: 0.3,
          })
        );
        const optimizedGroup = new THREE.Group();
        optimizedGroup.add(optimizedMesh);
        setOptimizedModel(optimizedGroup);

        const optimizedPolygons = calculatePolygonCount(optimizedGroup);

        setModelData((prev) => ({
          ...prev,
          originalPolygons,
          optimizedPolygons,
          originalSize: parseFloat(fileSize),
          optimizedSize: parseFloat((parseFloat(fileSize) * 0.15).toFixed(1)),
          isProcessing: false,
        }));
      } catch (error) {
        console.error('Error loading model:', error);
        setModelData((prev) => ({ ...prev, isProcessing: false }));
      }
    };

    reader.readAsArrayBuffer(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const loadSampleModel = (type: 'character' | 'product' | 'scene') => {
    setModelData((prev) => ({ ...prev, isProcessing: true }));

    setTimeout(() => {
      let originalGroup: THREE.Group;

      if (type === 'character') {
        originalGroup = createCharacterModel();
        setModelData((prev) => ({
          ...prev,
          fileName: '3d_character_hero.blend',
        }));
      } else if (type === 'product') {
        originalGroup = createProductModel();
        setModelData((prev) => ({
          ...prev,
          fileName: 'product_device.blend',
        }));
      } else {
        originalGroup = createSceneModel();
        setModelData((prev) => ({
          ...prev,
          fileName: 'architectural_scene.blend',
        }));
      }

      setOriginalModel(originalGroup);

      // Calculate metrics
      const originalPolygons = calculatePolygonCount(originalGroup);
      const optimizedGroup = createOptimizedModel(originalGroup);
      setOptimizedModel(optimizedGroup);
      const optimizedPolygons = calculatePolygonCount(optimizedGroup);

      // Simulate file size based on polygon count
      const fileSize = (originalPolygons / 1000) * 5; // Rough estimate: 5KB per 1K polys

      setModelData((prev) => ({
        ...prev,
        originalPolygons,
        optimizedPolygons,
        originalSize: parseFloat(fileSize.toFixed(1)),
        optimizedSize: parseFloat((fileSize * 0.15).toFixed(1)),
        isProcessing: false,
      }));
    }, 1000); // Simulate processing delay
  };

  const handleReset = () => {
    setOriginalModel(null);
    setOptimizedModel(null);
    setModelData({
      originalPolygons: 0,
      optimizedPolygons: 0,
      originalSize: 0,
      optimizedSize: 0,
      fileName: '',
      isProcessing: false,
    });
  };

  const polygonReduction = modelData.originalPolygons > 0
    ? (
        ((modelData.originalPolygons - modelData.optimizedPolygons) /
          modelData.originalPolygons) *
        100
      ).toFixed(1)
    : 0;

  const fileReduction = modelData.originalSize > 0
    ? (
        ((modelData.originalSize - modelData.optimizedSize) /
          modelData.originalSize) *
        100
      ).toFixed(1)
    : 0;

  return (
    <div className="w-full">
      {!originalModel ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-6 text-center">
            <Upload className="w-16 h-16 text-blue-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-2 text-gray-100">Upload Your 3D Model</h3>
            <p className="text-gray-400 mb-6">
              Supported formats: OBJ, FBX, GLTF, GLB (Max 100MB)
            </p>

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={modelData.isProcessing}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto mb-4"
            >
              <Upload className="w-5 h-5" />
              {modelData.isProcessing ? 'Processing...' : 'Upload Model'}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".obj,.fbx,.gltf,.glb"
              onChange={handleFileUpload}
              className="hidden"
              disabled={modelData.isProcessing}
            />

            <p className="text-sm text-gray-400 mb-4">Or try a sample model:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => loadSampleModel('character')}
                disabled={modelData.isProcessing}
                className="px-6 py-2 bg-violet-600/30 border border-violet-500 text-violet-300 rounded-lg text-sm font-medium hover:bg-violet-600/50 transition-all"
              >
                Character Model
              </button>
              <button
                onClick={() => loadSampleModel('product')}
                disabled={modelData.isProcessing}
                className="px-6 py-2 bg-cyan-600/30 border border-cyan-500 text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-600/50 transition-all"
              >
                Product Device
              </button>
              <button
                onClick={() => loadSampleModel('scene')}
                disabled={modelData.isProcessing}
                className="px-6 py-2 bg-pink-600/30 border border-pink-500 text-pink-300 rounded-lg text-sm font-medium hover:bg-pink-600/50 transition-all"
              >
                Scene/Building
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Model Comparison */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Original Model */}
            <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden">
              <div className="h-96 relative">
                <Canvas
                  shadows
                  onCreated={({ gl }) => {
                    gl.setClearColor('#000000', 1);
                  }}
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-400 text-sm">Loading...</p>
                      </div>
                    </div>
                  }
                >
                  <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                  <OriginalModel model={originalModel} />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    minDistance={3}
                    maxDistance={15}
                  />
                  <gridHelper args={[20, 20, '#1F2937', '#111827']} position={[0, -5, 0]} />
                </Canvas>
              </div>
              <div className="bg-gray-900/50 p-4 border-t border-gray-800">
                <h4 className="font-bold text-blue-400 mb-2">Original Model</h4>
                <p className="text-sm text-gray-400">{modelData.fileName}</p>
              </div>
            </div>

            {/* Optimized Model */}
            <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden">
              <div className="h-96 relative">
                <Canvas
                  shadows
                  onCreated={({ gl }) => {
                    gl.setClearColor('#000000', 1);
                  }}
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-400 text-sm">Optimizing...</p>
                      </div>
                    </div>
                  }
                >
                  <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                  <OptimizedModel model={optimizedModel} />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    minDistance={3}
                    maxDistance={15}
                  />
                  <gridHelper args={[20, 20, '#1F2937', '#111827']} position={[0, -5, 0]} />
                </Canvas>
              </div>
              <div className="bg-gray-900/50 p-4 border-t border-gray-800">
                <h4 className="font-bold text-violet-400 mb-2">AI Optimized</h4>
                <p className="text-sm text-gray-400">Auto-reduced mesh</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2">Original Polygons</div>
              <div className="text-2xl font-bold text-blue-400">
                {(modelData.originalPolygons / 1000).toFixed(1)}K
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2">Optimized Polygons</div>
              <div className="text-2xl font-bold text-violet-400">
                {(modelData.optimizedPolygons / 1000).toFixed(1)}K
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2">Polygon Reduction</div>
              <div className="text-2xl font-bold text-green-400">{polygonReduction}%</div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2">File Size Reduction</div>
              <div className="text-2xl font-bold text-cyan-400">{fileReduction}%</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload Another
            </button>

            <div className="flex gap-2 justify-center">
              <button
                onClick={() => loadSampleModel('character')}
                className="px-4 py-3 bg-violet-600/30 border border-violet-500 text-violet-300 rounded-xl text-sm font-semibold hover:bg-violet-600/50 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Character
              </button>
              <button
                onClick={() => loadSampleModel('product')}
                className="px-4 py-3 bg-cyan-600/30 border border-cyan-500 text-cyan-300 rounded-xl text-sm font-semibold hover:bg-cyan-600/50 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Product
              </button>
              <button
                onClick={() => loadSampleModel('scene')}
                className="px-4 py-3 bg-pink-600/30 border border-pink-500 text-pink-300 rounded-xl text-sm font-semibold hover:bg-pink-600/50 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Scene
              </button>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Clear
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".obj,.fbx,.gltf,.glb"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </>
      )}
    </div>
  );
}
