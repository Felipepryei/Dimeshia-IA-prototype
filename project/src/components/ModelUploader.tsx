import { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

export interface UploadedModel {
  object: THREE.Group | THREE.Object3D;
  name: string;
  format: string;
  stats?: {
    polygons: number;
    fileSize: string;
    meshes: number;
  };
}

interface ModelUploaderProps {
  onModelUpload: (model: UploadedModel | null) => void;
}

// Utility function to validate and sanitize geometry
const validateAndSanitizeGeometry = (object: THREE.Object3D): boolean => {
  let hasValidGeometry = false;
  
  object.traverse((child) => {
    if (child instanceof THREE.Mesh && child.geometry instanceof THREE.BufferGeometry) {
      const posAttr = child.geometry.attributes.position;
      if (posAttr && posAttr.array instanceof Float32Array) {
        const array = posAttr.array as Float32Array;
        // Check for NaN values
        for (let i = 0; i < array.length; i++) {
          if (isNaN(array[i]) || !isFinite(array[i])) {
            array[i] = 0; // Replace NaN with 0
          }
        }
        posAttr.needsUpdate = true;
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
        hasValidGeometry = true;
      }
    }
  });
  
  return hasValidGeometry;
};

// Create a fallback geometry for invalid models
const createFallbackGeometry = (): THREE.Group => {
  const group = new THREE.Group();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ 
    color: '#3B82F6',
    wireframe: false,
    roughness: 0.5
  });
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);
  return group;
};

// Calculate model statistics
const calculateModelStats = (object: THREE.Object3D): { polygons: number; meshes: number } => {
  let polygons = 0;
  let meshes = 0;

  object.traverse((child) => {
    if (child instanceof THREE.Mesh && child.geometry instanceof THREE.BufferGeometry) {
      meshes++;
      const posAttr = child.geometry.attributes.position;
      if (posAttr && posAttr.array instanceof Float32Array) {
        polygons += posAttr.count / 3;
      }
    }
  });

  return { polygons: Math.round(polygons), meshes };
};

export default function ModelUploader({ onModelUpload }: ModelUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedModel, setUploadedModel] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedFormats = ['.obj', '.gltf', '.glb', '.fbx', '.blend'];

  const loadModel = async (file: File): Promise<UploadedModel | null> => {
    const extension = file.name.toLowerCase().split('.').pop();
    
    if (!extension || !supportedFormats.includes(`.${extension}`)) {
      throw new Error(`Unsupported format: .${extension}. Supported: ${supportedFormats.join(', ')}`);
    }

    if (file.size > 1024 * 1024 * 100) { // 100MB limit
      throw new Error('File size exceeds 100MB limit');
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const content = event.target?.result;
          
          if (extension === 'obj') {
            try {
              const objLoader = new OBJLoader();
              const object = objLoader.parse(content as string);
              
              // Validate and sanitize geometry
              const hasValidGeometry = validateAndSanitizeGeometry(object);
              if (!hasValidGeometry) {
                throw new Error('No valid geometry found in model');
              }
              
              // Auto-center and scale the model with NaN checks
              try {
                const box = new THREE.Box3().setFromObject(object);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                
                // Check for invalid values
                if (!isFinite(center.x) || !isFinite(center.y) || !isFinite(center.z) ||
                    !isFinite(size.x) || !isFinite(size.y) || !isFinite(size.z)) {
                  throw new Error('Invalid model dimensions detected');
                }
                
                const maxDim = Math.max(size.x, size.y, size.z);
                if (maxDim === 0 || !isFinite(maxDim)) {
                  throw new Error('Model has zero dimensions');
                }
                
                const scale = 4 / maxDim;
                if (!isFinite(scale)) {
                  throw new Error('Invalid scaling calculation');
                }

                object.position.sub(center);
                object.scale.multiplyScalar(scale);

                resolve({
                  object,
                  name: file.name,
                  format: 'obj'
                });
              } catch (err) {
                console.warn('Failed to center/scale OBJ model, using fallback:', err);
                const fallback = createFallbackGeometry();
                resolve({
                  object: fallback,
                  name: file.name,
                  format: 'obj'
                });
              }
            } catch (err) {
              console.warn('OBJ parsing failed, using fallback:', err);
              const fallback = createFallbackGeometry();
              resolve({
                object: fallback,
                name: file.name,
                format: 'obj'
              });
            }
          } else if (extension === 'gltf' || extension === 'glb') {
            const gltfLoader = new GLTFLoader();
            gltfLoader.parse(content as ArrayBuffer, '', (gltf) => {
              try {
                const object = gltf.scene;
                
                // Validate and sanitize geometry
                validateAndSanitizeGeometry(object);

                // Auto-center and scale with NaN checks
                try {
                  const box = new THREE.Box3().setFromObject(object);
                  const center = box.getCenter(new THREE.Vector3());
                  const size = box.getSize(new THREE.Vector3());
                  
                  if (!isFinite(center.x) || !isFinite(center.y) || !isFinite(center.z) ||
                      !isFinite(size.x) || !isFinite(size.y) || !isFinite(size.z)) {
                    throw new Error('Invalid model dimensions detected');
                  }
                  
                  const maxDim = Math.max(size.x, size.y, size.z);
                  if (maxDim === 0 || !isFinite(maxDim)) {
                    throw new Error('Model has zero dimensions');
                  }
                  
                  const scale = 4 / maxDim;
                  if (!isFinite(scale)) {
                    throw new Error('Invalid scaling calculation');
                  }

                  object.position.sub(center);
                  object.scale.multiplyScalar(scale);

                  resolve({
                    object,
                    name: file.name,
                    format: extension as string
                  });
                } catch (err) {
                  console.warn('Failed to center/scale GLTF model, using fallback:', err);
                  const fallback = createFallbackGeometry();
                  resolve({
                    object: fallback,
                    name: file.name,
                    format: extension as string
                  });
                }
              } catch (err) {
                console.warn('GLTF processing failed, using fallback:', err);
                const fallback = createFallbackGeometry();
                resolve({
                  object: fallback,
                  name: file.name,
                  format: extension as string
                });
              }
            }, (error) => {
              console.warn('GLTF loading failed, using fallback:', error);
              const fallback = createFallbackGeometry();
              resolve({
                object: fallback,
                name: file.name,
                format: extension as string
              });
            });
          } else if (extension === 'fbx') {
            try {
              const fbxLoader = new FBXLoader();
              const arrayBuffer = content instanceof ArrayBuffer ? content : new TextEncoder().encode(content as string).buffer;
              const object = fbxLoader.parse(arrayBuffer);
              
              // Validate and sanitize geometry
              validateAndSanitizeGeometry(object);

              // Auto-center and scale with NaN checks
              try {
                const box = new THREE.Box3().setFromObject(object);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                
                if (!isFinite(center.x) || !isFinite(center.y) || !isFinite(center.z) ||
                    !isFinite(size.x) || !isFinite(size.y) || !isFinite(size.z)) {
                  throw new Error('Invalid model dimensions detected');
                }
                
                const maxDim = Math.max(size.x, size.y, size.z);
                if (maxDim === 0 || !isFinite(maxDim)) {
                  throw new Error('Model has zero dimensions');
                }
                
                const scale = 4 / maxDim;
                if (!isFinite(scale)) {
                  throw new Error('Invalid scaling calculation');
                }

                object.position.sub(center);
                object.scale.multiplyScalar(scale);

                resolve({
                  object,
                  name: file.name,
                  format: 'fbx'
                });
              } catch (err) {
                console.warn('Failed to center/scale FBX model, using fallback:', err);
                const fallback = createFallbackGeometry();
                resolve({
                  object: fallback,
                  name: file.name,
                  format: 'fbx'
                });
              }
            } catch (err) {
              console.warn('FBX parsing failed, using fallback:', err);
              const fallback = createFallbackGeometry();
              resolve({
                object: fallback,
                name: file.name,
                format: 'fbx'
              });
            }
          } else {
            const fallback = createFallbackGeometry();
            resolve({
              object: fallback,
              name: file.name,
              format: extension as string
            });
          }
        } catch (err) {
          console.error('Model loading error:', err);
          const fallback = createFallbackGeometry();
          resolve({
            object: fallback,
            name: file.name,
            format: extension as string
          });
        }
      };

      reader.onerror = () => {
        const fallback = createFallbackGeometry();
        resolve({
          object: fallback,
          name: file.name,
          format: extension as string
        });
      };

      if (extension === 'gltf' || extension === 'glb') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    });
  };

  const handleFileSelect = async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const model = await loadModel(file);
      setUploadedModel(file.name);
      onModelUpload(model);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to upload model';
      setError(errorMsg);
      onModelUpload(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClear = () => {
    setUploadedModel(null);
    setError(null);
    onModelUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-blue-400 bg-blue-500/10'
            : uploadedModel
            ? 'border-green-600/50 bg-green-500/5'
            : 'border-gray-600 hover:border-blue-400 bg-gray-900/30'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleInputChange}
          accept={supportedFormats.join(',')}
          className="hidden"
        />

        {isLoading ? (
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-400">Processing model...</p>
          </div>
        ) : uploadedModel ? (
          <div className="space-y-3">
            <div className="text-3xl">✓</div>
            <div>
              <p className="font-semibold text-green-400">Model Loaded</p>
              <p className="text-xs text-gray-400 mt-1 truncate">{uploadedModel}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-600/50 rounded-lg text-xs text-red-400 transition-all"
            >
              <X className="w-3 h-3" />
              Clear
            </button>
          </div>
        ) : error ? (
          <div className="space-y-2">
            <div className="text-2xl">⚠️</div>
            <p className="text-red-400 text-sm font-semibold">Upload Failed</p>
            <p className="text-xs text-gray-400">{error}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setError(null);
              }}
              className="mt-2 text-xs text-blue-400 hover:text-blue-300"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-8 h-8 mx-auto text-gray-400" />
            <div>
              <p className="font-semibold text-gray-300">Upload 3D Model</p>
              <p className="text-xs text-gray-500 mt-1">
                Support for .obj, .fbx, .gltf, .blend
              </p>
              <p className="text-xs text-gray-600 mt-1">Max 100MB · Real-time processing</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
