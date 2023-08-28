import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Explore</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Stay Connected</h3>
        
      </div>
      <div className="center-text">
        <h2>DEV@DEAKIN 2022</h2>
      </div>
      <div className="horizontal">
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
      
    </footer>
  );
}

export default Footer;