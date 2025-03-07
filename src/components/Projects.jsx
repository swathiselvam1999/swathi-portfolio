import React, { useState } from 'react';
import projects from '../assets/projects.jpg';
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
