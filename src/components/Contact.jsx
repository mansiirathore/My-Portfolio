import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-background text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                    Get in Touch
                </h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
                </p>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-surface to-background/70 p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-glow transition-all duration-300 max-w-md mx-auto text-left">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <FaEnvelope />
                        <a
                            href="mailto:rathore.mansi2005@gmail.com"
                            className="hover:underline text-sm text-white"
                        >
                            rathore.mansi2005@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3 mb-6 text-secondary">
                        <FaMapMarkerAlt />
                        <p className="text-sm text-gray-300">Rajasthan, India</p>
                    </div>

                    <div className="flex justify-start gap-6 text-xl mt-4">
                        <a
                            href="https://github.com/mansiirathore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                            title="GitHub"
                        >
                            <FaGithub />
                            <p className="text-sm text-gray-300">GitHub</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mansir21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                            title="LinkedIn"
                        >
                            <FaLinkedin />
                            <p className="text-sm text-gray-300">LinkedIn</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
