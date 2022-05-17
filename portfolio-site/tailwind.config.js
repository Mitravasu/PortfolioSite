module.exports = {
  content: [
    "./src/components/Header.js",
    "./src/components/Home.js",
    "./src/components/Intro.js",
    "./src/components/Projects.js",
    "./src/components/Experience.js",
    "./src/components/WorkCard.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('/public/MitravasuPrakash.jpg')",
      },
      colors: {
        'navtext': '#e8e8e8',
        'navhover': 'white',
        'primary': 'black',        
        'secondary': '#191970',
        'secondaryhover': '#3030ec',
        'navbg': 'black',
        'cards': '#fafafa'
      },
    },
  },
  plugins: [],
}
