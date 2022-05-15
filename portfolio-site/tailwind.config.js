module.exports = {
  content: [
    "./src/components/Header.js",
    "./src/components/Home.js",
    "./src/components/Intro.js",
    "./src/components/Projects.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('/public/MitravasuPrakash.jpg')",
      },
      backgroundColor: {
        'mitrabg': 'black'
      },
      colors: {
        'mitratext': 'white'
      }
    },
  },
  plugins: [],
}
