import React from "react";
import SkillGlobe from "./SkillGlobe";

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-20 text-white flex flex-col items-center h-screen w-full">
      <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-10">My Skills</h3>
      <SkillGlobe />
    </section>
  );
};

export default Skills;
