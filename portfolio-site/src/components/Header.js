
function Header() {
  return (
    // style={{position: "fixed", width: "100%", backgroundColor: 'black', color: 'white'}}
    <div className="top-0 w-screen py-4 text-mitratext bg-mitrabg flex flex flex-wrap justify-items-end">
        <a className="px-4" href='#intro'>Home</a>
        <a className="px-4" href='#projects'>Projects</a>
    </div>
  );
}

export default Header;
