import React from 'react';
import profile from '../assets/about-me.png';
import resume from '../assets/swathi_resume.pdf';
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'framer-motion';

const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
    return (
        <section id="about" className='relative z-10 py-20 flex justify-center items-center text-white'>
            <div className='grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-8 md:px-16 items-center'>
                <motion.div
                    // className="bg-red-500 text-white p-10 rounded-lg text-xl font-bold"
                    variants={leftVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // Re-triggers on scroll
                >

                    {/* Left Section - Text Content */}
                    <div className='flex flex-col justify-center items-center md:items-start bg-gray-900'>
                        <h3 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text'>
                            About Me
                        </h3>
                        <p className='my-9 md:mx-0 text-justify  leading-relaxed text-gray-300 '>
                            "I am a Front-End Developer with one year of experience in building responsive, interactive, and user-friendly web applications. Proficient in HTML5, CSS3, and JavaScript, I have hands-on expertise in React.js, Tailwind CSS, and Redux, ensuring seamless UI development with clean, maintainable code. Beyond frontend, I have experience in Node.js, Express.js, and MongoDB, having developed small full-stack applications. Passionate about transforming design concepts into functional web experiences, I thrive on attention to detail and optimizing performance. Constantly learning and evolving, I aim to build intuitive and scalable web solutions that enhance user engagement." 🚀
                        </p>

                        {/* Resume Download Button */}
                        <div className='flex justify-center md:justify-start'>
                            <a
                                href={resume}
                                download='swathi_resume.pdf'
                                className='px-4 py-1 md:px-6 md:py-3 flex items-center gap-2 text-white font-bold text-lg rounded-lg border border-gradient-to-r from-blue-500 to-blue-700 transition-all shadow-[0_0_15px_3px_rgba(0,191,255,0.2)] duration-300 bg-blue-900 hover:scale-105'
                            >
                                Download Resume < MdOutlineFileDownload />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    // className="bg-blue-500 text-white p-10 rounded-lg text-xl font-bold"
                    variants={rightVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >

                    {/* Right Section - Profile Image */}
                    <div className='flex justify-center items-center relative py-10 md:py-0'>
                        {/* Rotating Outer Circle */}
                        <div className="absolute w-[17rem] h-[17rem] md:w-[22rem] md:h-[22rem] rounded-full border-[3px] border-blue-500 border-opacity-50"></div>

                        {/* Profile Image with Shadow */}
                        <div className='relative h-[60%] w-[60%] md:w-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_15px_3px_rgba(0,191,255,0.6)] '>
                            <img
                                src={profile}
                                alt="Profile"
                                className=' md:w-full md:h-full object-cover transition-transform duration-500 hover:scale-105'
                            />

                            {/* Glowing Effect */}
                            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse opacity-30"></div>
                        </div>

                    </div>
                </motion.div>


            </div>
        </section>
    );
}

export default About;
