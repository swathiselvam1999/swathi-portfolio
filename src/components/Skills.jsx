import React from "react";
import SkillGlobe from "./SkillGlobe";

const Skills = () => {
  return (
    // <section id="skills" className="relative z-10 py-20 text-white bg-gray-900 flex flex-col items-center justify-center w-3/4 mx-auto h-screen max-w-[90vw]">
      <section id="skills" className="relative z-10 py-20 text-white bg-gray-900 flex flex-col items-center justify-center w-3/4 mx-auto min-h-[60vh] max-w-[90vw]">
      <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-10">My Skills</h3>
      <SkillGlobe />
    </section>
  );
};

export default Skills;
