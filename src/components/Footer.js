// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    // The footer element with dark background, white text, and padding
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a company committed to providing the best services.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              Email: info@example.com <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
