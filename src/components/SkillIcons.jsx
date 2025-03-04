import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiRedux, SiGraphql, SiNextdotjs  } from "react-icons/si";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Html } from "@react-three/drei";

const skillIcons = [
  { icon: <FaHtml5 color="#E34F26" size={60} />, position: [3.5, 1.5, 0] },  // HTML (Orange)
  { icon: <FaCss3 color="#1572B6" size={60} />, position: [-3.5, 1.5, 0] }, // CSS (Blue)
  { icon: <FaJs color="#F7DF1E" size={60} />, position: [0, 3.5, 0] },      // JS (Yellow)
  { icon: <FaReact color="#61DAFB" size={60} />, position: [0, -3, 0] },    // React (Cyan)
  { icon: <FaNode color="#68A063" size={60} />, position: [2, 2, 0] },      // Node.js (Green)
  { icon: <SiMongodb color="#4DB33D" size={60} />, position: [-2, -2, 0] }, // MongoDB (Green)
  { icon: <SiExpress color="#888888" size={60} />, position: [0, 0, 2] },   // Express (Gray)
  { icon: <SiTailwindcss color="#38B2AC" size={60} />, position: [0, 2, 2] }, // Tailwind (Blue-Green)
  { icon: <FaBootstrap color="#7952B3" size={60} />, position: [2, 0, 2] }, // Bootstrap (Violet)
  { icon: <SiRedux color="#764ABC" size={60} />, position: [-2, 0, 2] },    // Redux (Purple)
  // { icon: <SiGraphql color="#E10098" size={60} />, position: [0, -2, 2] },  // GraphQL (Pink)
  // { icon: <SiNextdotjs color="#000000" size={60} />, position: [0, 0, -3] } // Next.js (Black)
];

const SkillIcons = () => {
  const groupRef = useRef();

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
