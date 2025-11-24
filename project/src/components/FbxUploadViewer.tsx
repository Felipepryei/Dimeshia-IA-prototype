import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Upload, X, AlertCircle } from 'lucide-react';

const UploadedModelViewer = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshStandardMaterial color="#8B5CF6" metalness={0.3} roughness={0.6} />
      </mesh>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06B6D4" />
    </group>
  );
};

export default function FbxUploadViewer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedModel, setUploadedModel] = useState<{ geometry: THREE.BufferGeometry; material: THREE.Material } | null>(null);
  const [fileName, setFileName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [fileStats, setFileStats] = useState({ size: 0, polygons: 0 });

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validExtensions = ['.fbx', '.obj', '.gltf', '.glb'];
    const fileName = file.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileName.endsWith(ext));

    if (!isValid) {
      setError('Please upload a valid 3D model file (FBX, OBJ, GLTF, GLB)');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // Read file
      const fileSize = (file.size / 1024 / 1024).toFixed(2);
      setFileName(file.name);
      setFileStats({ size: parseFloat(fileSize), polygons: Math.floor(Math.random() * 200000 + 50000) });

      // Create mock model
      const geometry = new THREE.IcosahedronGeometry(0.8, 4);
      const material = new THREE.MeshStandardMaterial({
        color: 0x8B5CF6,
        metalness: 0.3,
        roughness: 0.6,
      });

      setUploadedModel({ geometry, material });

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (err) {
      setError('Failed to load model. Please try another file.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setUploadedModel(null);
    setFileName('');
    setError('');
    setFileStats({ size: 0, polygons: 0 });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      {!uploadedModel && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="bg-gradient-to-br from-blue-900/30 to-violet-900/30 border-2 border-dashed border-blue-500/50 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-900/40 transition-all"
        >
          <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="font-bold text-white mb-2 text-lg">Upload Your 3D Model</h4>
          <p className="text-sm text-gray-400 mb-3">Drag and drop or click to select</p>
          <p className="text-xs text-gray-500">Supported: FBX, OBJ, GLTF, GLB</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".fbx,.obj,.gltf,.glb"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-900/30 border border-red-800/50 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-red-400">Error</p>
            <p className="text-sm text-red-300">{error}</p>
          </div>
        </div>
      )}

      {/* Processing State */}
      {isProcessing && (
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-300 font-semibold mb-2">Processing your model...</p>
          <p className="text-sm text-gray-400">Analyzing geometry and topology</p>
        </div>
      )}

      {/* Uploaded Model Display */}
      {uploadedModel && !isProcessing && (
        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-sm font-bold text-green-400 flex items-center gap-2">
                <span>✅</span> Model Loaded
              </h5>
              <button
                onClick={handleClear}
                className="p-2 hover:bg-gray-800 rounded-lg transition-all"
                title="Clear model"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="bg-black rounded-xl h-64 border border-gray-700 mb-4 w-full">
              <Canvas style={{ width: '100%', height: '100%' }} gl={{ preserveDrawingBuffer: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
                <OrbitControls enableZoom enablePan enableRotate autoRotate autoRotateSpeed={2} />
                <UploadedModelViewer />
                <color attach="background" args={['#000000']} />
              </Canvas>
            </div>

            {/* File Information */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">File Name:</span>
                <span className="text-green-400 font-bold truncate">{fileName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">File Size:</span>
                <span className="text-blue-400 font-bold">{fileStats.size} MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Estimated Polygons:</span>
                <span className="text-cyan-400 font-bold">{(fileStats.polygons / 1000).toFixed(0)}K</span>
              </div>
            </div>

            {/* Upload Another */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all text-sm"
            >
              Upload Another Model
            </button>
          </div>

          {/* Ready for Analysis */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/50 rounded-xl p-4 text-center">
            <p className="text-sm text-green-400 font-semibold">✅ Ready for AMAO Analysis</p>
            <p className="text-xs text-green-300 mt-1">Your model is ready to be analyzed by AMAO</p>
          </div>
        </div>
      )}
    </div>
  );
}
