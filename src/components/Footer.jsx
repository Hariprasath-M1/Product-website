import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h3>Contact Information:</h3>
        <p>Address: 123 Main Street, Anytown, India</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: summer@example.com</p>
        <p>
          Website: <a href="http://www.example.com" className="link">www.example.com</a>
        </p>
      </div>
      <div className="section">
        <h3>Follow Us:</h3>
        <p>
          <a href="http://www.facebook.com/example" className="link"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
        </p>
        <p>
          <a href="http://www.twitter.com/example" className="link"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </p>
        <p>
          <a href="http://www.instagram.com/example" className="link"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
        </p>
      </div>
      <div className="section">
        <h3>About Us:</h3>
        <p>
          Our company is dedicated to providing the best service in the industry. We strive to exceed our customers' expectations with high-quality products and exceptional customer service.
        </p>
      </div>
      <div className="copyright">
        &copy;2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
