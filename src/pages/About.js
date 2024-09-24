import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <br></br>
      <br></br>
      <br></br>
      <img src="../images/profile.jpg" alt="Profile" />
      <br></br>
      <br></br>
      <br></br>
      <p>
        Hello! My name is Harpreet Kaur, and I am currently pursuing a degree in Computer Science. 
        I am passionate about full stack web development, creating efficient backend solutions, and crafting dynamic, user-friendly front-end interfaces.
      </p>
      <br></br>
      <p>
        In addition to my coding skills, I also enjoy graphic design, particularly logo creation. 
        I love combining technology and creativity to solve real-world problems through innovative web applications.
      </p>
      <a href="/resume.pdf" download>Download Resume</a>
    </div>
  );
};

export default About;
