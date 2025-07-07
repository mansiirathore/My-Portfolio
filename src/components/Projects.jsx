import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import quizverseImg from '../assets/quizverse.png';
import jobsyImg from '../assets/jobsy.png';
import predictorImg from '../assets/score-predictor.png';


const projects = [
    {
        title: "QuizVerse",
        description:
            "An interactive quiz platform with real-time feedback and clean responsive design.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://mansiirathore.github.io/quizverse/",
        github: "https://github.com/mansiirathore/quizverse",
        image: quizverseImg,
    },
    {
        title: "Jobsy",
        description:
            "A modern job board app built with React, allowing users to browse and post job listings easily.",
        tech: ["React", "Tailwind CSS"],
        live: "https://mansiirathore.github.io/Jobsy/",
        github: "https://github.com/mansiirathore/Jobsy",
        image: jobsyImg,
    },
    {
        title: "Score Predictor",
        description:
            "A machine learning-based predictor for performance scores using Streamlit and Python.",
        tech: ["Python", "Streamlit", "Pandas"],
        live: "https://performance-predictor-qzwwcxsktmsjghlfqehrvx.streamlit.app/",
        github: "https://github.com/mansiirathore/performance-predictor",
        image: predictorImg,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-surface text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-background/70 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:shadow-glow transition-all"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 text-xs mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-surface border border-white/10 text-white px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-primary hover:text-secondary text-sm"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-primary hover:text-secondary text-sm"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

