/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8B5CF6',
                secondary: '#16A34A',
                background: '#0F172A',
                surface: '#1E293B',
                glass: 'rgba(255, 255, 255, 0.1)',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        require('tailwind-scrollbar-hide'),
    ],
    boxShadow: {
        glow: '0 0 15px rgba(139, 92, 246, 0.4)', // Purple glow
    },
};
