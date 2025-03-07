import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    };

    if (isOpen) {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [isOpen]);

  // Parent animation (Stagger letters)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each letter appears with delay
      },
    },
  };

  // Letter animation (Jumping effect)
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };


  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed  left-1/2 transform -translate-x-1/2 w-full 
      bg-[#0f172a] text-white py-4 px-8 shadow-lg 
      backdrop-blur-md bg-opacity-80 z-50 p-[2px]"
      >
        <div className="flex max-w-7xl mx-auto justify-between items-center">
          {/* Logo */}
          <div className="lg:flex items-center text-white text-2xl md:text-3xl px-2 py-1 cursor-pointer ">
            <motion.div
              href="#home"
              className="flex bg-clip-text font-bold "
              variants={containerVariants}
              initial="hidden"
              animate='visible'
            >
              {"Swathi Selvam".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{
                    textShadow: "0 0 10px rgba(0, 255, 255, 0.9), 0 0 20px rgba(255, 0, 255, 0.8)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Dropdown Toggle for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleButton}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Full Menu for Larger Screens */}
          <div className={`md:flex hidden items-center`}>
            <ul className="flex text-xl">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="relative px-5 py-2 text-white transition-colors duration-500 hover:hover:text-blue-400 group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown (Moved Outside Navbar) */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ x: "-100%" }}  // Start hidden off-screen
          animate={{ x: 0 }}  // Slide in
          exit={{ x: "-100%" }}  // Slide out
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-[3rem] left-0 w-[70%] h-[100%] bg-gray-900/75 backdrop-blur-md 
          transition-all duration-300 ease-in-out z-40 p-5"
        >
          <ul className="flex flex-col gap-3 text-xl">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block px-5 py-3 text-white transition-colors duration-500 hover:text-blue-400 group hover:translate-x-1 relative 
             before:content-['\00BB'] before:opacity-0 hover:before:opacity-100 
             before:absolute before:left-0 before:transition-opacity before:duration-300"
                  onClick={closeMenu}
                >
                  {item}
                  {/* <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span> */}
                </a>
              </li>
            ))}
          </ul>
          {/* <button className="mt-3 px-6 py-2 text-white font-bold text-lg rounded-full border bg-gray-900 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(0,191,255,0.6)] hover:scale-105">
            Hire Me
          </button> */}
        </motion.div>
      )}
    </>
  );
};

export default Header;
