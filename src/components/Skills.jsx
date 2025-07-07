import React from "react";

const skillGroups = [
    {
        title: "Programming Languages",
        skills: ["C++", "C", "Python", "SQL", "JavaScript"],
    },
    {
        title: "Development Tools",
        skills: ["VS Code", "Git", "GitHub", "Postman", "Jupyter Notebook"],
    },
    {
        title: "CS Fundamentals",
        skills: ["DSA", "DAA", "Machine Learning", "DBMS", "OOPS", "Computer Networks"],
    },
    {
        title: "Tech Stack",
        skills: ["React.js", "Flask", "HTML", "CSS"],
    },
    {
        title: "Databases",
        skills: ["MongoDB", "MySQL"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-background text-white">
            <div className="max-w-7xl mx-auto text-center overflow-x-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
                    My Skills
                </h2>

                <div className="flex gap-6 justify-start md:justify-center flex-nowrap overflow-x-auto pb-4 scrollbar-hide">
                    {skillGroups.map((group, idx) => (
                        <div
                            key={idx}
                            className="min-w-[240px] bg-gradient-to-br from-surface to-background/80 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-glow hover:scale-105 transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-4">
                                {group.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2 justify-center">
                                {group.skills.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="bg-background/80 text-white text-xs px-3 py-1 rounded-full border border-white/10 hover:bg-primary/20 transition"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}