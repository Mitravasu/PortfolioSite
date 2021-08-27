import React from 'react';
import './Footer.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png'

function mailToggle() {
  let icon = document.getElementById('mailIcon');
  icon.style.display = "none";
  let m = document.getElementById('mail');
  m.innerText = "mitravasu.prakash@mail.utoronto.ca";
  m.style.display = "block";
}

function Footer() {

  return (
    <div class="FooterBox">
      <div class="ContactBox">
        <h2>Contact</h2>
        <div class='Contacts'>
          <a class="Contact" href="https://github.com/Mitravasu">
            <img src={github} alt="Github Icon to github profile of Mitravasu"></img>
          </a>
          <a class="Contact" href="https://linkedin.com/in/mitravasu-prakash-a61186145">
            <img src={linkedin} alt="LinkedIn Icon to LinkedIn profile of Mitravasu"></img>
          </a>
          <div class="Contact" onClick={mailToggle} title="Click to Reveal Email">
            <img id='mailIcon' src={mail} alt="Mail icon which links to Mitravasu's mailing address"></img>
            <p id='mail' style={{display: "none"}}></p>
          </div>
        </div>
      </div>
      <div>
        {/* <a class="Top" href="#Top">Back to Top</a> */}
      </div>
    </div>
  );
}

export default Footer;
