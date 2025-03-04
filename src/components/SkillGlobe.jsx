import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import SkillIcons from "./SkillIcons"; // We will create this next

const SkillGlobe = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Controls for rotating the scene */}
      <OrbitControls enableZoom={false} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* 3D Sphere for the skill globe */}
      <Sphere args={[3, 32, 32]}>
        <meshStandardMaterial color="#60A5FA" wireframe />
      </Sphere>

      {/* Skill Icons */}
      <SkillIcons />
    </Canvas>
  );
};

export default SkillGlobe;
