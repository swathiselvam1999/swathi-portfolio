import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandTailwind, TbBrandBootstrap } from "react-icons/tb";
import { BiLogoRedux, BiLogoMongodb, BiLogoVisualStudio } from "react-icons/bi";
import { RiNodejsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

// Skill icons list
const skillIcons = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <TbBrandTailwind />, name: "Tailwind" },
  { icon: <TbBrandBootstrap />, name: "Bootstrap" },
  { icon: <BiLogoRedux />, name: "Redux" },
  { icon: <RiNodejsFill />, name: "Node.js" },
  { icon: <GrMysql />, name: "MySQL" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <BiLogoVisualStudio />, name: "VS Code" },
];

export default function FloatingSkills() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "#000" }}>
      {/* Floating Particles */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000" },
          particles: {
            number: { value: skillIcons.length },
            shape: { type: "image" },
            move: { enable: true, speed: 2 },
            size: { value: 50 },
            opacity: { value: 1 },
            collisions: { enable: true },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
          },
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      {/* Floating Skill Icons */}
      {skillIcons.map((skill, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            fontSize: "2rem",
            color: "white",
          }}
        >
          {skill.icon}
        </div>
      ))}
    </div>
  );
}
