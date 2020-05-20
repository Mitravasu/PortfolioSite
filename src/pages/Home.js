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
    <div>
      <div className="HomeProjectSpace">
        <a className="HomeProjectCard" href="https://cookingu.netlify.app/">
          <Card className="HomeProjectCard">
            <CardMedia className="HomeMedia" image={cookingURL} title="CookingU" />
          </Card>
        </a>
        <a className="HomeProjectCard" href="https://github.com/Mitravasu/BeatStar">
          <Card className="HomeProjectCard">
            <CardMedia className="HomeMedia" image={beatstarURL} title="CookingU" />
          </Card>
        </a>
        <a className="HomeProjectCard" href="https://physicsplaygroundu.netlify.app/">
          <Card className="HomeProjectCard">
            <CardMedia className="HomeMedia" image={physicsURL} title="CookingU" />
          </Card>
        </a>
      </div>
      <div className="HomeProfileSpace">
        <a className="HomeProjectCard" href="https://www.linkedin.com/in/mitravasu-prakash-a61186145">
          <Card className="HomeProjectCard">
            <CardMedia className="HomeMedia" image={profileURL} title="Mitravasu Prakash" />
          </Card>
        </a>

      </div>
    </div>
  );
}

export default Home;
