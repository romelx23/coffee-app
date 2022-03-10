module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // auto-columns
        "cards": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      fontFamily: {
        'sansita': ['Sansita Swashed', 'cursive']
      },
      keyframes: {
        entry: {
          '0%': { transform: 'scale(.5)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'fade-slow': 'entry .2s linear',
      }
    },
  },
  plugins: [],
}