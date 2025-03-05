import React from 'react';
import profile from '../assets/avatar-image.png';
import { TypeAnimation } from 'react-type-animation';
import ParticlesTest from './ParticlesTest';
import { motion } from 'framer-motion';

const Home = () => {

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <section id="home" className="relative py-20 flex justify-center items-center scroll-mt-16 bg-gray-900 text-white">

      <ParticlesTest />

      {/* Main Content */}
      <div className=" relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center px-6 md:px-12">

        {/* Right Section - Profile Image */}
        <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
          <img src={profile} alt="Avatar" className="h-[40] w-[40] md:h-80 md:w-80 rounded-full border-4 border-transparent animate-flipOnce transition-transform duration-700 shadow-2xl shadow-blue-400 ease-in-out hover:scale-105 hover:cursor-pointer" />

        </div>

        <motion.div
          // className="bg-blue-500 text-white p-10 rounded-lg text-xl font-bold"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >

          {/* Left Section - Text & Social Icons */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400">
              Hi, I'm <span className="block text-pink-500 mt-2">Swathi Selvam</span>
            </h1>


            {/* Typing Animation for Roles */}
            <TypeAnimation
              sequence={["Web Developer", 1000, "React Developer", 1000, "Frontend Developer", 1000]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className=" text-xl md:text-3xl font-semibold text-green-400 mt-3 items-center md:items-start"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Home;
