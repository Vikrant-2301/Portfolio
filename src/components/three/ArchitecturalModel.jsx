"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

function WireframeBuilding() {
  const meshRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle rotation
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.rotation.x = Math.cos(t * 0.2) * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial
        color="white"
        wireframe
        emissive="white"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function FloatingShapes() {
  const groupRef = useRef(null);
  useFrame((state) => {
    // Rotate entire group based on mouse position (parallax)
    const { x, y } = state.mouse;
    groupRef.current.rotation.y = x * 0.2;
    groupRef.current.rotation.x = -y * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <WireframeBuilding />
      </Float>
      {/* Abstract orbiting elements */}
      <Float speed={4} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, 1, -1]} scale={0.5}>
          <dodecahedronGeometry />
          <meshStandardMaterial color="#444" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function ArchitecturalScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-difference">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
