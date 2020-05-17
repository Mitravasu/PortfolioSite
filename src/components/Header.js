import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


function Header() {
  function handleChange(e) {
    e.preventDefault();
    var page = "";
    page = e.target.value;
    document.getElementById("display").innerHTML = "Project";
    window.location.href = e.target.value;
  }

  return (
    <div className="Header">
      <Router>
        <div className="HeaderLinks">
          <Link className="HeaderLink" to="/">Home</Link>
          <Link className="HeaderLink" to="/projects">Projects</Link>
          <a className="HeaderLink" href="https://drive.google.com/file/d/1AiUPbDK04za_Pz7JL9qU7UR2SVOGmpB_/view?usp=sharing">Resume</a>
          <Link className="HeaderLink" to="/contact">Contact Me</Link>

          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

          <select label="" className="LinkSelect" onChange={handleChange}>
            <option id="display" disabled selected hidden>Home</option>
            <option value="/" >Home</option>
            <option value="https://drive.google.com/file/d/1AiUPbDK04za_Pz7JL9qU7UR2SVOGmpB_/view?usp=sharing">Resume</option>
            <option value="projects">Projects</option>
            <option value="contact">Contact Me</option>
          </select>
        </div>
      </Router>
    </div>
  );
}

export default Header;
