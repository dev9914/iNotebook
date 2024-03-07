import React from 'react';
import "./about.css";

const About = () => {
  
  return (
    <div className='mainBody'>
      <div className="container5">
      <h1 className='intro'>I'm a mern stack developer looking for internship/job</h1>
      </div>
      <div className='contact'>
        Connect with Me 
        <ul>
          <a href="https://www.linkedin.com/in/devanand-kumar-09b451294/" rel="noreferrer" target='_blank'>
          <li className="li">Linkedin</li>
          </a>
          <a href="https://github.com/dev9914" rel="noreferrer" target='_blank'>
          <li className="li">GitHub</li>
          </a>
          <a href="https://www.instagram.com/dev.cmd/" rel="noreferrer" target='_blank'>
          <li className="li">Instagram</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default About
