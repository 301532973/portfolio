// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
 // Custom styles for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main St, Brampton, ON L6Y3Y6</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} /> +1 (437) 871-2400</p>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <div className="social-icons">
              
              <a href="https://x.com/SahilpreetKau19" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/301532973" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/harpreet-kaur-88084332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
             
              <a href="https://www.facebook.com/addhi.gill?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Full Stack Developer with a passion for creating interactive applications and experiences on the web.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Harpreet Kaur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
