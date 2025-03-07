import React from 'react';
import profile from '../assets/avatar-image.png';
import { TypeAnimation } from 'react-type-animation';
import ParticlesTest from './not-using-now/ParticlesTest';
import { motion } from 'framer-motion';

const Home = () => {

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <section id="home" className="relative py-10 flex justify-center items-center scroll-mt-16 text-white h-100vh">

      <ParticlesTest />

      {/* Main Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center px-6 md:px-12 pt-20 ">

      {/* <div class="relative w-full h-screen "></div> */}


        {/* Right Section - Profile Image */}
        <div className="relative p-1 rounded-full flex justify-center items-center group">
          <div className="absolute w-[14rem] h-[14rem] sm:h-[22rem] sm:w-[22rem] md:w-[22rem] md:h-[22rem] rounded-full border-[3px] border-blue-500 border-opacity-50"></div>

          <img
            src={profile}
            alt="Avatar"
            className="h-[60%] w-[60%] md:w-80 rounded-full border-4 border-transparent animate-flipOnce transition-transform duration-700 shadow-2xl shadow-blue-400 ease-in-out  bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 group-hover:scale-105"
          />

        </div>

        <motion.div
          // className="bg-blue-500 text-white p-10 rounded-lg text-xl font-bold"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >

          {/* Left Section - Text & Social Icons */}
          <div className="flex flex-col justify-center items-center md:items-start bg-bgColor">
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
