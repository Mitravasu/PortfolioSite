import React from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import cookingURL from '../images/cookingu.webp';
import physicsURL from '../images/physics.webp';
import beatstarURL from '../images/beatstar.png';

function Home() {
  document.title = "Mitravasu Prakash - Home";
  return (
    <div class="Page">
      <div class="IntroSpace">
        <h1>Hey, I'm Mitravasu Prakash!</h1>
        <p>
          I am an aspriring Software Developer and Data Scientist, and am currently pursuing a Bachelors of Science in Statistics, with specialization in Machine Learning and Data Mining at the University of Toronto Scarborough.
          <br />I enjoy developing applications in Java and writing scripts in Python.
        </p>
        <span class='Learn'><span class='LearnGoal'>My Current Learning Goals: </span>
          <span class='LearnSkill'>TensorFlow</span><span class='LearnSkill'>R</span><span class='LearnSkill'>REST API</span>
        </span>
      </div>
      <div class="SkillsSpace">
        <h1>My Skills</h1>
        <div class="SkillList">
          <div class="Skills">
            <h2>Web/Frameworks</h2>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>Bootstrap</li>
              <li>Netlify CMS</li>
              <li>MongoDB</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>jQuery</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div class="Skills">
            <h2>Programming Languages</h2>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>C#</li>
            </ul>
          </div>
          <div class="Skills">
            <h2>Other</h2>
            <ul>
              <li>OOP</li>
              <li>SQL</li>
              <li>GitHub</li>
              <li>Agile</li>
              <li>Unity</li>
              <li>Software Design Patterns</li>
              <li>GUI</li>
              <li>SVN</li>
              <li>Google Cloud Platform</li>
              <li>JSON</li>
              <li>Relational Databases</li>
            </ul>
          </div>

        </div>
      </div>
      <div class="HomeProjectSpace">
        <h1>My Projects</h1>
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
              <li>Netlify CMS</li>
              <li>GitHub</li>
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
              <li>ReactJS</li>
              <li>Netlify CMS</li>
              <li>GitHub</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
