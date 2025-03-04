import React, { useState } from 'react';
import projects from '../assets/projects.jpg';
import { BiSolidHappyHeartEyes } from 'react-icons/bi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const allProjects = [
        {
            title: "Ecommerce Web Application",
            image: projects,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident nisi praesentium hic quo?",
            link: 'https://daisyui.com/components/card/',
        },
        {
            title: "Social Media App",
            image: projects,
            desc: "A social media platform for sharing short stories and poems.",
            link: 'https://daisyui.com/components/card/',
        },
        {
            title: "Portfolio Website",
            image: projects,
            desc: "A personal portfolio website showcasing my skills and projects.",
            link: 'https://daisyui.com/components/card/',
        },
        {
            title: "Blog Platform",
            image: projects,
            desc: "A platform for users to create and share blogs.",
            link: 'https://daisyui.com/components/card/',
        },
    ];

    const [showAll, setShowAll] = useState(false);

    const projectHandler = () => {
        setShowAll(!showAll);
    };

    const projectsToShow = showAll ? allProjects : allProjects.slice(0, 3);

    return (
        <section id='projects' className='relative z-10 py-20'>
            <div className='mb-10'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text text-center'>Projects</h1>
            </div>
            <div className='flex flex-col gap-10 items-center'>
                {projectsToShow.map((project, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-5 max-w-4xl w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <img className='w-[70%] md:w-[20rem] h-auto object-cover rounded-lg' src={project.image} alt={project.title} />
                        <div className='w-[70%] md:w-1/2 p-5 text-center md:text-left bg-gray-900'>
                            <h2 className='text-2xl font-bold'>{project.title}</h2>
                            <p className='mt-2'>{project.desc}</p>
                            <a className='px-4 py-2 mt-3 inline-flex items-center gap-2 bg-blue-500 text-white font-semibold rounded-full border border-solid  hover:bg-blue-600 transition duration-300 shadow-[0_0_15px_3px_rgba(0,191,255,0.2)]' href={project.link} target='_blank' rel='noopener noreferrer '>View <FiExternalLink /></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-5'>
                <button
                    onClick={projectHandler}
                    className="px-6 py-2 rounded-full text-white font-bold text-lg border border-blue-500 bg-blue-900 hover:scale-105 transition-transform duration-300"
                >
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </section>
    );
};

export default Projects;
