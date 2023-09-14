/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'text': '#f9f9fb',
                'background': '#16161d',
                'primary': '#c8c7b7',
                'secondary': '#181920',
                'accent': '#929272',
                'accent-light': '#777d73',
            },
        },
    },
    plugins: [],
    darkMode: "class",
}
