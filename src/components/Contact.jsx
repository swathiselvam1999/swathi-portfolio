import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import contact from "../assets/contact.jpg";

const Contact = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1); 
    }, []);

    const socialLinks = [
        { href: "https://www.linkedin.com/in/swathi-web-developer", icon: FaLinkedin, color: "text-blue-500" },
        { href: "mailto:swathideveloper@gmail.com", icon: FiMail, color: "text-red-500" },
        { href: "https://wa.me/918270012993", icon: FaWhatsapp, color: "text-green-500" },
        { href: "tel:+918270012993", icon: FaPhoneAlt, color: "text-blue-400" },
        { href: "https://github.com/swathiselvam1999", icon: FaGithub, color: "text-gray-400" },
    ];

    return (
        <section id='contact' className='flex justify-center items-center relative z-10 py-10 scroll-mt-16 bg-gray-950/50 p-10 shadow-lg border border-blue-800'>
            <div className='relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center px-6 md:px-12'>

                {/* ✅ Fixed Image Wrapper */}
                <div className="flex justify-center items-center rounded-full  ">
                <div className="absolute w-[10rem] h-[10rem] md:w-[22rem] md:h-[22rem] rounded-full border-[3px] border-blue-500 border-opacity-50"></div>
                    <img src={contact} alt="Contact" className='h-[60%] w-[60%] md:w-80 rounded-full border-4 border-blue-500 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 shadow-[0_0_15px_3px_rgba(0,191,255,0.6)]' loading="lazy" />
                </div>

                {/* ✅ Fixed Text Section */}
                <div className='flex flex-col items-center text-center'>
                    <h3 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text mb-5'>
                        Get In Touch
                    </h3>
                    <p className='md:text-xl mb-10 max-w-md'>
                    " Feel free to reach out to me anytime, I'm here to assist and happy to help! " 
                    </p>

                    {/* ✅ Fixed Icons Alignment */}
                    <motion.div
                        className="flex gap-6 text-2xl md:text-4xl mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={{
                                        hidden: { y: 50, opacity: 0 },
                                        visible: { y: [0, -10, 0], opacity: 1 },
                                    }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.2 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Icon className={` ${link.color} transition-transform duration-300 text-2xl md:text-4xl hover:scale-110`} />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
