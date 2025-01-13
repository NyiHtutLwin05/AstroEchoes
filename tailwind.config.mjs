/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#5A67D8',
        secondary: '#F56565',
        dark: '#1A202C',
        light: '#F7FAFC'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 20s infinite linear',
        'wave': 'wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
      },
    }
  },
  plugins: []
}