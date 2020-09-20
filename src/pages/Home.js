import React from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import cookingURL from '../images/cookingu.png';
import physicsURL from '../images/physics.png';
import beatstarURL from '../images/beatstar.png';

function Home() {
  document.title = "Mitravasu Prakash - Home";
  return (
    <div class="Page">
      <div class="IntroSpace">
        <h1 class="Intro heading">Hey, I'm Mitravasu Prakash...</h1>
        <p class="Intro paragraph">
          I am currently pursuing Statistics, with specialization in Machine Learning and Data Mining at the University of Toronto Scarborough.
            <br />I enjoy software development and I want to learn more about data science.
          </p>
      </div>
      <div class="SkillsSpace">
        <h1>My Skills</h1>
        <div class="SkillList">
          <ul class="Skills">
            <h2>Web/Frameworks</h2>
            <li>React</li>
            <li>Gatsby</li>
            <li>Bootstrap</li>
            <li>MongoDB</li>
          </ul>
          <ul class="Skills">
            <h2>Programming Languages</h2>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>C#</li>
          </ul>
          <ul class="Skills">
            <h2>Other</h2>
            <li>OOP</li>
            <li>Git</li>
            <li>Unity</li>
            <li>GUI</li>
            <li>SVN</li>
          </ul>
        </div>
      </div>
      <div class="HomeProjectSpace">
        <h1>My Projects</h1>
        <div class="Projects">
          <a href="https://cookingu.netlify.app/">
            <Card className="HomeProjectCard" square>
              <CardMedia className="HomeMedia" image={cookingURL} title="CookingU" />
            </Card>
            <p>CookingU, a website for sharing recipes</p>
            <p><b>Tags:</b> React, HTML5, Javascript, CSS3</p>
          </a>
          <a href="https://github.com/Mitravasu/BeatStar">
            <Card className="HomeProjectCard" square>
              <CardMedia className="HomeMedia" image={beatstarURL} title="CookingU" />
            </Card>
            <p>BeatStar, a beat-tapping game.</p>
            <p><b>Tags:</b> Java, GUI, OOP</p>
          </a>
          <a href="https://physicsplaygroundu.netlify.app/">
            <Card className="HomeProjectCard" square>
              <CardMedia className="HomeMedia" image={physicsURL} title="CookingU" />
            </Card>
            <p>PhysicsPlaygroundU, a highschool physics lab simulator</p>
            <p><b>Tags:</b> C#, Unity</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
