import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandTailwind, TbBrandBootstrap } from "react-icons/tb";
import { BiLogoRedux, BiLogoMongodb, BiLogoVisualStudio } from "react-icons/bi";
import { RiNodejsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

// Skill categories with icons
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { icon: <FaHtml5 />, angle: 0 },
      { icon: <FaCss3Alt />, angle: 50 },
      { icon: <FaJs />, angle: 100 },
      { icon: <FaReact />, angle: 150 },
      { icon: <TbBrandTailwind />, angle: 200 },
      { icon: <TbBrandBootstrap />, angle: 250 },
      { icon: <BiLogoRedux />, angle: 300 },
    ],
    radius: 2,
    speed: 0.02,
  },
  {
    name: "Backend",
    skills: [
      { icon: <RiNodejsFill />, angle: 30 },
      { icon: <GrMysql />, angle: 150 },
      { icon: <BiLogoMongodb />, angle: 270 },
    ],
    radius: 3,
    speed: 0.015,
  },
  {
    name: "Tools",
    skills: [
      { icon: <FaGitAlt />, angle: 90 },
      { icon: <BiLogoVisualStudio />, angle: 210 },
    ],
    radius: 4,
    speed: 0.01,
  },
];

function RotatingRing({ radius, speed, skills }) {
  const ringRef = useRef();

  useFrame(() => {
    ringRef.current.rotation.z += speed;
  });

  return (
    <group ref={ringRef}>
      {/* Actual Ring */}
      <mesh>
        <torusGeometry args={[radius, 0.05, 16, 100]} />
        <meshStandardMaterial color="white" emissive="blue" emissiveIntensity={0.5} />
      </mesh>

      {/* Place skills along the ring */}
      {skills.map((skill, index) => {
        const radian = (skill.angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return <SkillIcon key={index} position={[x, y, 0]} icon={skill.icon} />;
      })}
    </group>
  );
}

function SkillIcon({ position, icon }) {
  return (
    <group position={position}>
      {/* Skill Icon */}
      <Html position={[0, 0, 0]} transform>
        <div style={{ fontSize: "24px", color: "white" }}>{icon}</div>
      </Html>
    </group>
  );
}

export default function SkillOrbit() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />

      {/* Rings with Icons */}
      {skillCategories.map((category, index) => (
        <RotatingRing key={index} {...category} />
      ))}

      <OrbitControls />
    </Canvas>
  );
}
