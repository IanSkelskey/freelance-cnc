import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

const Model = ({ animate }) => {
  const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + '/test.obj');
  const meshRef = useRef();

  useFrame(() => {
    if (animate) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  // Traverse the object and update the material
  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new MeshStandardMaterial({
        color: '#ffffff',  // Stainless steel color
        metalness: 0.8,    // High metalness for a metallic look
        roughness: 0.2,    // Low roughness for a shiny surface
      });
      child.scale.set(0.02, 0.02, 0.02);
    }
  });

  return <primitive object={obj} ref={meshRef} />;
};

export default function CubeCanvas({ animate }) {
  return (
    <Canvas>
      <ambientLight intensity={0.5}  />
      <directionalLight position={[0, 10, 0]} intensity={1} color={'#FFFFFF'} castShadow />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Model animate={animate} />
      <OrbitControls />
    </Canvas>
  );
}

