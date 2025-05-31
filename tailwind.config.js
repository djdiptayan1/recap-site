/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'recap-primary': '#0B8494',
                'recap-primary-light': 'rgba(11, 132, 148, 0.2)',
                'recap-primary-lighter': 'rgba(11, 132, 148, 0.1)',
                'recap-gradient-start': '#B0E0E0',
                'recap-gradient-end': '#EFB9CC',
                'recap-card-bg': '#F4F6FF',
            },
            backgroundImage: {
                'recap-gradient': 'linear-gradient(to right, #B0E0E0, #EFB9CC)',
            },
        },
    },
    plugins: [],
    darkMode: 'media',
}
