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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
        'light-bg-grayish-cyan': 'hsl(180, 52%, 96%)',
        'light-filter-grayish-cyan': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        agdashima: ['Agdasima', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
