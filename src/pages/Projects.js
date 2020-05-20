import React from 'react';
import './Projects.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import cookingURL from '../images/cookingu.png';
import physicsURL from '../images/physics.png';
import beatstarURL from '../images/beatstar.png';
import courierURL from '../images/courier.png';


function Projects() {
  document.title = "Mitravasu Prakash - Projects";
  
  return (
    <div className="Projects">
    <div className="ProjectSpace">
      <a className="ProjectCard" href="https://cookingu.netlify.app/">
        <Card className="ProjectCard">
          <CardMedia className="Media" image={cookingURL} title="CookingU" />
        </Card>
      </a>
      <a className="ProjectCard" href="https://github.com/Mitravasu/BeatStar">
        <Card className="ProjectCard">
          <CardMedia className="Media" image={beatstarURL} title="BeatStar" />
        </Card>
      </a>
      <a className="ProjectCard" href="https://physicsplaygroundu.netlify.app/">
        <Card className="ProjectCard">
          <CardMedia className="Media" image={physicsURL} title="PhysicPlayground" />
        </Card>
      </a>
      <a className="ProjectCard" href="https://courieru.herokuapp.com/">
        <Card className="ProjectCard">
          <CardMedia className="Media" image={courierURL} title="CourierU" />
        </Card>
      </a>
    </div>
  </div>
  );
}

export default Projects;
