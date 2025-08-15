"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function RobotModel() {
  const robotRef = useRef();
  const textRef = useRef();

  // Rotate robot every frame
  useFrame(() => {
    if (robotRef.current) {
      robotRef.current.rotation.y += 0.01; // Spin
      // robotRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.5; // Bob up and down
    }
    if (textRef.current) {
      textRef.current.position.y = 2.5 + Math.sin(Date.now() * 0.002) * 0.2; // floating effect
    }
  });
  
  return (
    <group ref={robotRef}>
      {/* Speech bubble text */}
      <Text
        ref={textRef}
        position={[0, 2.5, 0]}
        fontSize={0.3}
        color="white"
        outlineWidth={0.02}
        outlineColor="black"
      >
        Hi, I'm Kristofer — nice to meet you!
      </Text>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-1.1, 0.4, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[1.1, 0.4, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.4, -1.5, 0]}>
        <boxGeometry args={[0.4, 1.4, 0.4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.4, -1.5, 0]}>
        <boxGeometry args={[0.4, 1.4, 0.4]} />
        <meshStandardMaterial color="white" />
      </mesh>

      

    </group>
  );
}

export default function RobotScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <RobotModel />
      <OrbitControls />
    </Canvas>
  );
}