/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                christmas: {
                    red: '#C41E3A',
                    green: '#165B33',
                    gold: '#FFD700',
                    darkGreen: '#0F4C28',
                    lightGold: '#FFF8DC',
                },
            },
            animation: {
                'twinkle': 'twinkle 1.5s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'snow': 'snow 10s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'dance': 'dance 2s ease-in-out infinite',
                'slide-up': 'slideUp 1s ease-out',
                'fade-in': 'fadeIn 1.5s ease-in',
                'sparkle': 'sparkle 1s ease-in-out infinite',
            },
            keyframes: {
                twinkle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.3', transform: 'scale(0.8)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                snow: {
                    '0%': { transform: 'translateY(-10vh) translateX(0)' },
                    '100%': { transform: 'translateY(100vh) translateX(100px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700' },
                    '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
                },
                dance: {
                    '0%, 100%': { transform: 'rotate(-5deg) translateY(0)' },
                    '25%': { transform: 'rotate(5deg) translateY(-10px)' },
                    '50%': { transform: 'rotate(-5deg) translateY(0)' },
                    '75%': { transform: 'rotate(5deg) translateY(-10px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(50px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.2) rotate(180deg)' },
                },
            },
        },
    },
    plugins: [],
}
