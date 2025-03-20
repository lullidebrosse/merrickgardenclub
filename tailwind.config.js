/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-green': 'var(--primary-green)',
        'secondary-gold': 'var(--secondary-gold)',
        'navy-blue': 'var(--navy-blue)',
      },
    },
  },
  plugins: [],
} 