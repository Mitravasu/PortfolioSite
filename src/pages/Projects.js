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
    <div className="ProjectSpace">
      <div class="Projects">
        <a class="Project" href="https://cookingu.netlify.app/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={cookingURL} title="CookingU" />
          </Card>
          <p>CookingU, a website for sharing recipes</p>
          <ul>
            <li>ReactJS</li>
            <li>HTML5</li>
            <li>Javascript</li>
            <li>CSS3</li>
          </ul>
        </a>
        <a class="Project" href="https://github.com/Mitravasu/BeatStar">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={beatstarURL} title="CookingU" />
          </Card>
          <p>BeatStar, a beat-tapping game.</p>
          <ul>
            <li>Java</li>
            <li>OOP</li>
            <li>GUI</li>
          </ul>
        </a>
        <a class="Project" href="https://physicsplaygroundu.netlify.app/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={physicsURL} title="CookingU" />
          </Card>
          <p>PhysicsPlaygroundU, a highschool physics lab simulator</p>
          <ul>
            <li>C#</li>
            <li>Unity</li>
          </ul>
        </a>
        <a class="Project" href="https://courieru.herokuapp.com/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={courierURL} title="CourierU" />
          </Card>
          <p>CourierU, a resource-delivery solution for the Covid-19 pandemic</p>
          <ul>
            <li>Bootstrap</li>
            <li>MongoDB</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default Projects;
