import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

const modelDirectory = process.env.PUBLIC_URL + '/assets/models/';

const InnerModel = ({ filename, animate }) => {
  const obj = useLoader(OBJLoader, modelDirectory + filename);
  const meshRef = useRef();

  useFrame(() => {
    if (animate) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });

  // Traverse the object and update the material
  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new MeshStandardMaterial({
        color: '#ffffff',
        metalness: 0.8,
        roughness: 0.2,
      });
      child.scale.set(0.02, 0.02, 0.02);
    }
  });

  return <primitive object={obj} ref={meshRef} />;
};

const ModelViewer = ({ filename, animate }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} color={'#FFFFFF'} castShadow />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <InnerModel filename={filename} animate={animate} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
