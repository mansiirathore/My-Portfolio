import React from "react";
import { FaCode, FaUsers, FaLightbulb } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-surface text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left - Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        I’m a B.Tech student in Computer Science and Engineering at NIT Jalandhar (CGPA: 8.25). I'm a passionate software developer who thrives on solving real-world problems
                        through clean code and intuitive UI/UX. I enjoy turning ideas into accessible, scalable, and
                        elegant digital experiences.
                    </p>
                    <p className="text-gray-400 mt-4">
                        I believe in continuous learning, creative thinking, and building with purpose.
                        Whether it's frontend, backend, or debugging edge cases — I'm always up for a challenge.
                    </p>
                </div>

                {/* Right - Feature Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Feature 1 */}
                    <div className="bg-background p-6 rounded-xl shadow-md border border-white/10 hover:shadow-xl transition-all">
                        <FaCode className="text-primary text-3xl mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Clean Code</h3>
                        <p className="text-sm text-gray-400">
                            I write modular, readable, and maintainable code with a focus on best practices.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-background p-6 rounded-xl shadow-md border border-white/10 hover:shadow-xl transition-all">
                        <FaLightbulb className="text-secondary text-3xl mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Problem Solving</h3>
                        <p className="text-sm text-gray-400">
                            Solving complex challenges using smart, efficient algorithms is what drives me.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-background p-6 rounded-xl shadow-md border border-white/10 hover:shadow-xl transition-all">
                        <FaUsers className="text-primary text-3xl mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Team Collaboration</h3>
                        <p className="text-sm text-gray-400">
                            I work well in diverse teams, believe in empathy, and love building together.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-background p-6 rounded-xl shadow-md border border-white/10 hover:shadow-xl transition-all">
                        <FaLightbulb className="text-secondary text-3xl mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Creative Thinking</h3>
                        <p className="text-sm text-gray-400">
                            I enjoy blending design with logic to create experiences that feel intuitive and beautiful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
