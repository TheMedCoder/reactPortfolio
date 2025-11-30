import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
    {
        name: "Portfolio Website",
        description:
            "A personal portfolio website built with Svelte and Tailwind CSS to showcase my projects and skills.",
        technologies: ["Svelte", "Tailwind CSS", "JavaScript"],
    },
    {
        name: "Battleship CLI Game",
        description:
            "A command-line battleship game with AI opponent, grid-based gameplay, and turn-based combat mechanics.",
        technologies: ["C#", ".NET", "Console"],
    },
    {
        name: "Healthcare Patient Management System",
        description:
            "A full-stack healthcare platform for managing patient appointments, medical tests, doctor schedules, patient history, and electronic health records.",
        technologies: ["SvelteKit", "C#", ".NET", "PostgreSQL"],
    },
    {
        name: "Calculator App",
        description:
            "A calculator built with HTML, Vue.js, and Tailwind CSS featuring basic arithmetic operations and a clean interface.",
        technologies: ["HTML", "Vue.js", "Tailwind CSS"],
    },
    {
        name: "Cinema Booking CLI System",
        description:
            "A command-line cinema booking system with seat selection, ticket management, and booking confirmation features.",
        technologies: ["C#", ".NET", "Console"],
    },
    {
        name: "A Google-Forms Like Web Application",
        description:
            "A Google-Forms-like web application for creating, distributing, and analyzing surveys, built with Svelte, C#, and Tailwind CSS.",
        technologies: [
            "C#",
            ".NET Framework",
            "SQlite",
            "Svelte",
            "Tailwind CSS",
        ],
    },
];

export default function ProjectsSection() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-full px-6 md:px-12 lg:px-24 pb-6" id="projects">
            <h1 className="text-center text-6xl font-bold text-white mb-12">Projects</h1>

            <div className="flex flex-col items-center mb-12 animate-pulse">
                <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                <div className="w-1 h-24 bg-sky-400"></div>
                <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:my-24">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border-rotate rounded-lg p-6 transition-all duration-300 hover:scale-102 active:scale-98"
                        data-aos="fade-up"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">{project.name}</h3>
                        <p className="text-slate-400 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-4">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center mt-12 animate-pulse">
                <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                <div className="w-1 h-24 bg-sky-400"></div>
                <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
            </div>
        </div>
    );
}