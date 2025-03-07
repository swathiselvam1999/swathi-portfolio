import React, { useState } from 'react';
import MyNotes from '../assets/MyNotes.png';
import MovieBite from '../assets/MovieBite.png'
import Portfolio from "../assets/Portfolio.png"
import weatherApp from "../assets/weatherApp.png"
import projectslearner from "../assets/projectslearner.png"
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const allProjects = [
        {
            title: "MyNotes",
            image: MyNotes,
            desc: "This is a simple Notes application built with the MERN stack, allowing you to effortlessly create, update, and manage your notes. It is a basic yet functional CRUD application designed for seamless note-taking.",
            technology: "HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB",
            link: 'https://notes-app-x9jc.onrender.com/',
        },
        {
            title: "Projects Learner",
            image: projectslearner,
            desc: "ProjectsLeaner is a sleek and intuitive platform designed to streamline project management, offering efficient task tracking and collaboration features. Its minimalist interface ensures a seamless user experience for teams and individuals.",
            technology: "HTML, CSS, JavaScript",
            link: 'https://projectslearner.com/',
        },
        {
            title: "WeatherWise",
            image: weatherApp,
            desc: "WeatherWise is a simple and responsive weather app that provides real-time weather updates, forecasts, and essential weather details for any location. 🌦️",
            technology: "HTML, CSS, JavaScript, React, Tailwind CSS",
            link: 'https://swathiselvam1999.github.io/weather-app/',
        },
        {
            title: "Portfolio Website",
            image: Portfolio,
            desc: "A personal portfolio website showcasing my skills and projects.",
            technology: "HTML, CSS, JavaScript ,React, Tailwind CSS",
            link: 'https://swathiselvam1999.github.io/swathi-portfolio/',
        },
        {
            title: "MovieBite",
            image: MovieBite,
            desc: "",
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
        <section id='projects' className='relative z-10 py-10'>
            <div className=''>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text text-center pb-10 bg-bgColor'>Projects</h1>
            </div>
            <div className='flex flex-col gap-10 items-center bg-bgColor'>
                {projectsToShow.map((project, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-5 max-w-4xl w-full ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <img className='w-[80%] md:w-[20rem] h-auto object-cover rounded-lg' src={project.image} alt={project.title} />
                        <div className='w-[80%] md:w-1/2 p-0 md:p-5 text-center md:text-left text-white '>
                            <h2 className='text-xl md:text-2xl font-bold'>{project.title}</h2>
                            <p className='mt-2'>{project.desc}</p>
                            <p className='mt-2'>Technologies Used: {project.technology}</p>
                            <a className='px-4 py-2 mt-3 inline-flex items-center gap-2 bg-blue-500 text-white font-semibold rounded-full border border-solid  hover:bg-blue-600 transition-transform hover:scale-105 duration-300 shadow-[0_0_15px_3px_rgba(0,191,255,0.2)] ' href={project.link} target='_blank' rel='noopener noreferrer '>View <FiExternalLink /></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-5'>
                <button
                    onClick={projectHandler}
                    className="px-4 py-1 md:px-6 md:py-3 flex items-center gap-2 text-white font-bold text-lg rounded-lg border border-gradient-to-r from-blue-500 to-blue-700 transition-all shadow-[0_0_15px_3px_rgba(0,191,255,0.2)] duration-300 bg-blue-900 hover:scale-105"
                >
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </section>
    );
};

export default Projects;
