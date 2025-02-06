/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./templates/**/*.{html,js}",
    "./profiling/templates/**/*.{html,js}",
    "./profiling/static/css/**/*.css", // Make sure app1 static CSS is included
    "./profiling/static/js/**/*.js", // Make sure app1 static CSS is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

