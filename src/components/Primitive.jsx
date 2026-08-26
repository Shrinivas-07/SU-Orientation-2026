import React, { useMemo } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export function Box({ size, color, position = [0,0,0], rotation = [0,0,0], ...props }) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow {...props}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.78} metalness={0.08} />
    </mesh>
  );
}

export function Cylinder({ args, color, position = [0,0,0], rotation = [0,0,0], ...props }) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow {...props}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.72} />
    </mesh>
  );
}

export function Label({ children, position, color = "white", size = 1.5, rotation=[0,0,0] }) {
  return (
    <Text position={position} rotation={rotation} fontSize={size} color={color} anchorX="center" anchorY="middle">
      {children}
    </Text>
  );
}

export function Ground({ width, depth }) {
  return (
    <Box size={[width, 0.25, depth]} color="#6f8d50" position={[0,-0.15,0]} />
  );
}

export function HighlightRing({ position, radius=2.5 }) {
  const points = useMemo(() => {
    const arr=[];
    for(let i=0;i<=64;i++){
      const a=(i/64)*Math.PI*2;
      arr.push(new THREE.Vector3(Math.cos(a)*radius, 0.03, Math.sin(a)*radius));
    }
    return arr;
  }, [radius]);
  return <line position={position}>
    <bufferGeometry attach="geometry" setFromPoints={points} />
    <lineBasicMaterial color="#35d7ff" linewidth={3} />
  </line>;
}