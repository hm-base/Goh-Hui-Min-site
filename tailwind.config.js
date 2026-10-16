/** Tailwind v3 build config. Rebuild: see README ("Rebuilding the CSS"). */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        ice: '#F8FAFC',
        midnight: '#0F172A',
        lav: '#DDD6FE',
        skyp: '#E0F2FE',
      },
    },
  },
};
