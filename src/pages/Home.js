import React from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import cookingURL from '../images/cookingu.png';
import physicsURL from '../images/physics.png';
import beatstarURL from '../images/beatstar.png';
import profileURL from '../images/profile.jpg';

function Home() {
  document.title = "Mitravasu Prakash - Home";
  return (
    <div class="Page">
      <div class="IntroSpace">
        <a href="https://www.linkedin.com/in/mitravasu-prakash-a61186145">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={profileURL} title="Mitravasu Prakash" />
          </Card>
        </a>
        <div class="Intro ">
          <h1 class="Intro heading">Hey, I'm Mitravasu Prakash</h1>
          <p class="Intro paragraph">
            I am currently pursuing Statistics, with specialization in Machine Learning and Data Mining at the University of Toronto Scarborough.
            <br/>I enjoy software development and I want to learn more about data science.
          </p>
        </div>
      </div>
      <div class="HomeProjectSpace">
        <a href="https://cookingu.netlify.app/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={cookingURL} title="CookingU" />
          </Card>
          <p>CookingU, a website for sharing recipes, made using React</p>
        </a>
        <a href="https://github.com/Mitravasu/BeatStar">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={beatstarURL} title="CookingU" />
          </Card>
          <p>BeatStar, a beat-tapping game, made entirely in Java</p>
        </a>
        <a href="https://physicsplaygroundu.netlify.app/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={physicsURL} title="CookingU" />
          </Card>
          <p>PhysicsPlaygroundU, a physics lab simulator made in Unity</p>
        </a>
      </div>
      <div class="SkillsSpace">
        <div class="Skills">
          <h1>My Skills</h1>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>HTML5, CSS3, Javascript</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Home;
