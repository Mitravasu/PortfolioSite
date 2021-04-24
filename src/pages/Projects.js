import React from 'react';
import './Projects.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import cookingURL from '../images/cookingu.webp';
import physicsURL from '../images/physics.webp';
import beatstarURL from '../images/beatstar.png';
import courierURL from '../images/courier.png';
import manageURL from '../images/manageu.png';


function Projects() {
  document.title = "Mitravasu Prakash - Projects";

  return (
    <div className="ProjectSpace">
      <div class="Projects">
        <a class="Project" href="https://github.com/l3n0ire/pythonDiscordBot">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={manageURL} title="CourierU" />
          </Card>
          <p class='description'>
            ManageU, a self-management discord bot.<br/>
            To keep track of my responsibilities, I used a Excel spreadsheet.
            However, it was nothing more than that. I wanted to use my Python skills
            to develop a bot for the Discord app. The main responsibilities of the bot 
            was to keep track of users, and their responsibilities and to send reminders.
            I used a MongoDB Atlas database to store the user information, and used Python 
            in tandem with the discord.py API to accomplish this vision. After completing the
            project, I used the bot to keep track of all my schoolwork and other responsibilites.
            Hence, I was able to improve my time management skills. I believe that I was able
            to improve my ability to research, as well as my skills in Python. In hindsight,
            I believe that I could've use the data to create charts and other diagrams indicating
            how long a task took, and better keep track of where I am spending most of my work time.
          </p>
          <ul>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Heroku</li>
            <li>discord.py</li>
            <li>GitHub</li>
          </ul>
        </a>
        <a class="Project" href="https://github.com/Mitravasu/BeatStar">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={beatstarURL} title="CookingU" />
          </Card>
          <p class='description'>
            BeatStar, a beat-tapping game. <br/>
            Created as a final project for my grade 12 computer science class.
            The theme of the project was to create a Java program to demonstrate my interests. I finished the project
            in two weeks, I spent the first few days finalizing my idea and brainstorming roughly how the project would look.
            Then, the next week was spent in coding the game. Finally the last few days were spent resolving any bugs. I was 
            able to present a polished product, as I had followed the proper steps of development. In hindsight, I believe that 
            there are a lot of improvements that could be made to the application, and I can see that it would be more beneficial to
            use other programming languages (such as JavaScript) to achieve a more modern look. 
          </p>
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
          <p class='description'>
            PhysicsPlaygroundU, a highschool physics lab simulator<br/>
            During the New Hacks Winter 2020 24-hr hackathon, my team decided to create 
            a Physics simulator. The goal of this project was to simulate high school
            physics labs virtually, as Covid-19 was starting to spread. We also wanted 
            it to be easier for students to understand the physics concepts that my team
            and I found confusing. To accomplish this goal, we used Unity as well as C# to 
            create the simulation. For the website, we used ReactJS, and decided to host the
            simulation on this website, for easier access. Since it was my first time working 
            in Unity, I had to spend a decent amount of time learning how the software works.
            I believe that the 24 hour time constraint was the most challenging part of the project.
            In hindsight, I should've focused my learning on the specific features that I would use,
            rather than focusing on Unity as a whole.
          </p>
          <ul>
            <li>C#</li>
            <li>Unity</li>
            <li>ReactJS</li>
            <li>Netlify CMS</li>
            <li>GitHub</li>
          </ul>
        </a>
        <a class="Project" href="https://courieru.herokuapp.com/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={courierURL} title="CourierU" />
          </Card>
          <p class='description'>CourierU, a resource-delivery solution for the Covid-19 pandemic</p>
          <ul>
            <li>Bootstrap</li>
            <li>MongoDB</li>
            <li>Heroku</li>
            <li>GitHub</li>
          </ul>
        </a>
        <a class="Project" href="https://cookingu.netlify.app/">
          <Card className="HomeProjectCard" square>
            <CardMedia className="HomeMedia" image={cookingURL} title="CookingU" />
          </Card>
          <p class='description'>CookingU, a website for sharing recipes</p>
          <ul>
            <li>ReactJS</li>
            <li>HTML5</li>
            <li>Javascript</li>
            <li>CSS3</li>
            <li>Netlify CMS</li>
            <li>GitHub</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default Projects;
