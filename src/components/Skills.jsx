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

export default function AnimatedSkills() {
  return (
    <div className="relative pt-10 pb-20 w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-10">
        Skills
      </h2>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
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
            <div key={index} className="flex flex-col items-center mx-6 font-semibold text-white min-w-[150px] bg-bgColor">
              <div className="text-4xl md:text-6xl">{skill.icon}</div>
              <div className="mt-2">{skill.name}</div>
            </div>
            
          ))}
        </motion.div>
      </div>
    </div>
  );
}
