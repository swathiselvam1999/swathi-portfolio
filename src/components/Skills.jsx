import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3 className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <FaBootstrap className="text-indigo-500" />, name: "Bootstrap" },
  { icon: <FaNode className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
];

const Skills = () => {
  return (
    <div id="skills" className="relative pt-10 pb-20 w-full flex flex-col items-center justify-center overflow-hidden" >
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-10">
        Skills
      </h2>

      <div className="w-full overflow-hidden">
        <motion.div
            className="flex whitespace-nowrap gap-4 sm:gap-6 md:gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25, // Slower speed
            ease: "linear",
          }}
          style={{ display: "flex", width: "max-content" }}
        >
          {/* Render skills twice to create an infinite loop effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center font-semibold text-whitebg-bgColor">
              <div className="text-xl md:text-4xl">{skill.icon}</div>
              <div className="mt-2">{skill.name}</div>
            </div>
            
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills
