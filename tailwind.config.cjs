/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'base': {
                    'light': '#faf4ed',
                    'dark': '#232136',
                },
                'surface': {
                    'light': '#fffaf3',
                    'dark': '#2a273f',
                },

                'overlay': {
                    'light': '#f2e9e1',
                    'dark': '#393552',
                },

                'muted': {
                    'light': '#9893a5',
                    'dark': '#6e6a86',
                },

                'subtle': {
                    'light': '#797593',
                    'dark': '#908caa',
                },

                'text': {
                    'light': '#575279',
                    'dark': '#e0def4',
                },

                'love': {
                    'light': '#b4637a',
                    'dark': '#eb6f92',
                },

                'gold': {
                    'light': '#ea9d34',
                    'dark': '#f6c177',
                },

                'rose': {
                    'light': '#d7827e',
                    'dark': '#ea9a97',
                },

                'pine': {
                    'light': '#286983',
                    'dark': '#3e8fb0',
                },

                'foam': {
                    'light': '#56949f',
                    'dark': '#9ccfd8',
                },

                'iris': {
                    'light': '#907aa9',
                    'dark': '#c4a7e7',
                },

                'highlight-low': {
                    'light': '#f4ede8',
                    'dark': '#2a283e',
                },

                'highlight-med': {
                    'light': '#dfdad9',
                    'dark': '#44415a',
                },

                'highlight-high': {
                    'light': '#cecacd',
                    'dark': '#56526e',
                },



            },
        },
    },
    plugins: [],
    darkMode: "class",
}
