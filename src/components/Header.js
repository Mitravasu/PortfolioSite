
function Header() {
  return (
    // style={{position: "fixed", width: "100%", backgroundColor: 'black', color: 'white'}}
    <div id='top' className="bg-dark1 text-light top-0 w-auto gap-2 sticky py-4 flex flex-col sm:flex-row flex-wrap justify-center font-sans">
        <a className="px-4 hover:text-lighthover" href='#intro'>Home</a>
        <a className="px-4 hover:text-lighthover" href='#experience'>Experience</a>
        <a className="px-4 hover:text-lighthover" href='#education'>Education</a>
        <a className="px-4 hover:text-lighthover" href='#projects'>Projects</a>
        <a className="px-4 hover:text-lighthover" href='#skills'>Skills</a>
    </div>
  );
}

export default Header;
