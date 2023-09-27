import React, { useRef, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

const modelDirectory = process.env.PUBLIC_URL + '/assets/models/';

const InnerModel = ({ filename, animate }) => {
  const obj = useLoader(OBJLoader, modelDirectory + filename);
  const meshRef = useRef();

  const material = useMemo(() => new MeshStandardMaterial({
    color: '#AAAAAA',
    dithering: true,
    metalness: 0.82,
    roughness: 0.2,
  }), []);

  useFrame(() => {
    if (animate && meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = material;
      child.scale.set(0.02, 0.02, 0.02);
    }
  });

  return <primitive object={obj} ref={meshRef} />;
};

const SmallCube = ({ position }) => {
  return (
    <mesh position={[...position]} receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#0000FF'} />
    </mesh>
  );
};

const ModelViewer = ({ filename, animate }) => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 12, 0]} intensity={1} color={'#CCCCFF'} castShadow/>
      <directionalLight position={[-10, -12, 0]} intensity={1} color={'#FFFFFF'} castShadow />
      <InnerModel filename={filename} animate={animate} />
      <SmallCube position={[10, 12, 0]} />
      <SmallCube position={[-10, -12, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
