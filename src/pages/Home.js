import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <div className="home">
    <h1>Welcome to My Portfolio</h1>
    
    <h2> Hi, I'm Harpreet!</h2>
    <br></br><br></br>
    <p>
     A Computer Science student with a passion for full stack web development and creative design. 
    </p>
    <p >
        "As a passionate and dedicated full stack developer, my mission is to leverage cutting-edge technology to create efficient, scalable, and user-friendly solutions.  My goal is to continuously evolve my skills, stay on top of industry trends, and contribute to meaningful projects that make a positive impact in the tech world."
      </p>
    <a href="/about">
      <button className="btn">Learn More About Me</button>
    </a>
  </div>
  );
};

export default Home;
