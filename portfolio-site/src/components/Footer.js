
function Footer() {
    return (
      // style={{position: "fixed", width: "100%", backgroundColor: 'black', color: 'white'}}
      <div id='top' className="top-0 w-screen bg-dark1 text-light sticky py-4 flex flex flex-wrap justify-center font-sans">
          <a className="px-4" href='#intro'>Home</a>
          <a className="px-4" href='#experience'>Experience</a>
          <a className="px-4" href='#projects'>Projects</a>
      </div>
    );
  }
  
  export default Footer;
  