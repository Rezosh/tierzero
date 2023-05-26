/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "site-bg": "url('/bg.jpg')",
        "hero-bg": "url('/hero.png')",
      },
      colors: {
        "primary": "#EA5B14",
      },
      gridTemplateColumns: {
        'stats-page': '1fr 250px',
      }
    },
  },
  plugins: [],
}
