// Cube.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube = ({ animate }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (animate) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={'#58A6FF'} wireframe />
    </mesh>
  );
};

export default function CubeCanvas({ animate }) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube animate={animate} />
    </Canvas>
  );
}
