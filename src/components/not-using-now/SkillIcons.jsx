import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiRedux,  } from "react-icons/si";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Html } from "@react-three/drei";

const SkillIcons = ({ sphereSize }) => {
  const groupRef = useRef();
  const iconSize = sphereSize === 1.5 ? 10 : sphereSize === 2 ? 20 : 50;

  const skillIcons = [
    { icon: <FaHtml5 color="#E34F26" size={iconSize} />, position: [sphereSize + 0.2, 1.1, 0] },
    { icon: <FaCss3 color="#1572B6" size={iconSize} />, position: [-sphereSize - 0.1, 1.1, 0] },
    { icon: <FaJs color="#F7DF1E" size={iconSize} />, position: [0, sphereSize + 0.2, 0] },
    { icon: <FaReact color="#61DAFB" size={iconSize} />, position: [0, -sphereSize - 0.2, 0] },
    { icon: <FaNode color="#68A063" size={iconSize} />, position: [1.2, 1.2, 0] },
    { icon: <SiMongodb color="#4DB33D" size={iconSize} />, position: [-1.2, -1.2, 0] },
    { icon: <SiExpress color="#888888" size={iconSize} />, position: [0, 0, 1.2] },
    { icon: <SiTailwindcss color="#38B2AC" size={iconSize} />, position: [0, 1.2, 1.2] },
    { icon: <FaBootstrap color="#7952B3" size={iconSize} />, position: [1.2, 0, 1.2] },
    { icon: <SiRedux color="#764ABC" size={iconSize} />, position: [-1.2, 0, 1.2] },
  ];

  // Rotate the icons around the globe
  useFrame(() => {
    groupRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef}>
      {skillIcons.map((skill, index) => (
        <mesh key={index} position={skill.position}>
          <Html center>{skill.icon}</Html>
        </mesh>
      ))}
    </group>
  );
};

export default SkillIcons;
