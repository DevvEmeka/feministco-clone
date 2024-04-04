/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sangbleu': ["sangbleu", "sans serif"],
        'DM-San': ["DM San", "sans serif"],
      },
      screens: {
        laptop: '1024px'
      },
      gridTemplateColumns: {
        'gridmix': 'repeat(6,1fr)',
      },
      gridTemplateRows: {
        'gridcon': 'repeat(4,1fr)',
      },
      objectPosition: {
        'center-twice': 'center center',
      },
      rotate: {
        '91': '270deg',
      },
      transitionDuration: {
        '250': '250ms',
      }
    },
  },
  plugins: [],
}
