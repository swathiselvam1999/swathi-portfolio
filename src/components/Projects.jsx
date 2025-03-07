import React, { useState } from 'react';
import MyNotes from '../assets/MyNotes.png';
import MovieBite from '../assets/MovieBite.png';
import Portfolio from "../assets/Portfolio.png";
import weatherApp from "../assets/weatherApp.png";
import projectslearner from "../assets/projectslearner.png";
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const allProjects = [
        {
            title: "MyNotes",
            image: MyNotes,
            desc: "A simple MERN stack Notes app that allows you to create, update, and manage your notes with ease.",
            technology: "HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB",
            link: 'https://notes-app-x9jc.onrender.com/',
        },
        {
            title: "Projects Learner",
            image: projectslearner,
            desc: "An intuitive project management platform with efficient task tracking and collaboration features.",
            technology: "HTML, CSS, JavaScript",
            link: 'https://projectslearner.com/',
        },
        {
            title: "WeatherWise",
            image: weatherApp,
            desc: "A sleek weather app that provides real-time updates, forecasts, and weather details for any location. 🌦️",
            technology: "HTML, CSS, JavaScript, React, Tailwind CSS",
            link: 'https://swathiselvam1999.github.io/weather-app/',
        },
        {
            title: "Portfolio Website",
            image: Portfolio,
            desc: "A personal portfolio website showcasing my skills, projects, and experience.",
            technology: "HTML, CSS, JavaScript, React, Tailwind CSS",
            link: 'https://swathiselvam1999.github.io/swathi-portfolio/',
        },
        {
            title: "MovieBite",
            image: MovieBite,
            desc: "A stylish movie browsing app built using React, showcasing trending and popular films.",
            technology: "HTML, CSS, JavaScript, React, Tailwind CSS",
            link: 'https://swathiselvam1999.github.io/MovieBite/',
        },
    ];

    const [showAll, setShowAll] = useState(false);

    const projectHandler = () => {
        setShowAll(!showAll);
    };

    const projectsToShow = showAll ? allProjects : allProjects.slice(0, 3);

    return (
        <section id='projects' className='relative z-10 py-16  text-white'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text pb-10'>
                    Projects
                </h1>
            </div>

            <div className='flex flex-col gap-10 items-center max-w-6xl mx-auto px-6'>
                {projectsToShow.map((project, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col md:flex-row items-center gap-8  rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_3px_rgba(0,191,255,0.1)] transition-shadow duration-300 w-full ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* ✅ Project Image */}
                        <img 
                            className='w-[90%] md:w-[18rem] h-auto object-cover rounded-lg shadow-lg transition-transform hover:scale-105 duration-300' 
                            src={project.image} 
                            alt={project.title} 
                        />

                        {/* ✅ Project Details */}
                        <div className='w-[90%] md:w-1/2 text-center md:text-left'>
                            <h2 className='text-2xl font-bold text-blue-400'>{project.title}</h2>
                            <p className='mt-2 text-gray-300'>{project.desc}</p>
                            <p className='mt-2 text-sm text-blue-200'>Tech Stack: {project.technology}</p>

                            <a 
                                className='inline-flex items-center gap-2 px-5 py-2 mt-4 text-white font-semibold bg-blue-600 rounded-full border border-blue-500 hover:bg-blue-700 transition-transform hover:scale-105 duration-300 shadow-lg' 
                                href={project.link} 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                View Project <FiExternalLink />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Show More Button */}
            <div className='flex justify-center mt-10'>
                <button
                    onClick={projectHandler}
                    className="px-6 py-3 flex items-center gap-2 text-white font-bold text-lg rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 transition-all shadow-lg hover:shadow-[0_0_15px_3px_rgba(0,191,255,0.4)] duration-300 hover:scale-105"
                >
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </section>
    );
};

export default Projects;
