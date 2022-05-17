
function Header() {
  return (
    // style={{position: "fixed", width: "100%", backgroundColor: 'black', color: 'white'}}
    <div id='top' className="top-0 w-screen sticky py-4 text-navtext bg-navbg flex flex flex-wrap justify-items-end font-sans">
        <a className="px-4 hover:text-navhover" href='#intro'>Home</a>
        <a className="px-4 hover:text-navhover" href='#experience'>Experience</a>
        <a className="px-4 hover:text-navhover" href='#projects'>Projects</a>
    </div>
  );
}

export default Header;
