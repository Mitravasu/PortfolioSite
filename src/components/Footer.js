import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div class="FooterBox">
      <div class="ContactBox">
        <h2>Contact</h2>
        <a class="Contact" href="https://github.com/Mitravasu">
          <span class="Type">GitHub:</span><p>https://github.com/Mitravasu</p>
        </a>
        <a class="Contact" href="https://linkedin.com/in/mitravasu-prakash-a61186145">
          <span class="Type">LinkedIn:</span><p>https://www.linkedin.com/in/mitravasu-prakash-a61186145</p>
        </a>
        <p class="Contact"><span class="Type">Email:</span><br /> mitravasu.prakash@mail.utoronto.ca</p>
      </div>
      <div class="NavBox">
        <h2>Explore</h2>
        <a class="Link" href="/">Home</a>
        <a class="Link" href="/projects">Projects</a>
        <a class="Link" href="https://drive.google.com/file/d/1AiUPbDK04za_Pz7JL9qU7UR2SVOGmpB_/view?usp=sharing">Resume</a>
      </div>
    </div>
  );
}

export default Footer;
