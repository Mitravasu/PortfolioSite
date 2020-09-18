import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Projects from '../pages/Projects';
import Home from '../pages/Home';


function Header() {
  return (
    <div>
      <Router>
        <div className='Header'>
          <Link className="HeaderLink" to="/">Home</Link>
          <Link className="HeaderLink" to="/projects">Projects</Link>
          <a className="HeaderLink" href="https://drive.google.com/file/d/1AiUPbDK04za_Pz7JL9qU7UR2SVOGmpB_/view?usp=sharing">Resume</a>
        </div>


        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* 
          <select label="" className="LinkSelect" onChange={handleChange}>
            <option id="display" disabled selected hidden>Home</option>
            <option value="/" >Home</option>
            <option value="https://drive.google.com/file/d/1AiUPbDK04za_Pz7JL9qU7UR2SVOGmpB_/view?usp=sharing">Resume</option>
            <option value="projects">Projects</option>
            <option value="contact">Contact Me</option>
          </select> */}
    </div >
  );
}

export default Header;
