import React from 'react';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-background to-surface text-white"
        >
            {/* Gradient Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-background/90 pointer-events-none z-0 blur-xl" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-md">
                    Hi, I'm Mansi Rathore
                </h1>

                {/* Tagline */}
                <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium">
                    Software Developer <span className="text-primary mx-2">|</span> Problem Solver
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-primary text-white hover:bg-purple-700 transition-all shadow-glow"
                    >
                        View Projects
                    </a>
                    <a
                        href="/My-Portfolio/Mansi_Rathore_Resume.pdf"
                        download
                        className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-background transition-all"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
