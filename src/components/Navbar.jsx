import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold text-primary">Mansi Rathore</h1>

                {/* Nav Links */}
                <div className="space-x-6 hidden md:flex">
                    <a href="#home" className="text-white hover:text-primary transition">Home</a>
                    <a href="#about" className="text-white hover:text-primary transition">About</a>
                    <a href="#skills" className="text-white hover:text-primary transition">Skills</a>
                    <a href="#projects" className="text-white hover:text-primary transition">Projects</a>
                    <a href="#contact" className="text-white hover:text-primary transition">Contact</a>
                </div>
            </div>
        </nav>
    );
}

