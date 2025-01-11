import React from "react";
import "./Footer.css"; // Import the CSS file for the footer

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About Bike Specs</h6>
            <p className="text-justify">
              At <i>BIKESPECS,</i> The Bike Specification Website aims to provide a comprehensive platform where users can explore detailed information about different bike models offered by your organization. 
The website will showcase the latest bike models, their specifications, and features in an interactive, user-friendly manner. 
The goal is to improve customer engagement, assist buyers in making informed decisions, and promote your brand effectively

            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>services/Specs</h6>
            <ul className="footer-links">
              <li>cc</li>
              <li>Bhp</li>
              <li>torque</li>
              <li>BS-6 service</li>
              <li>best engine service</li>
              <li>fix correct timing</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <ul className="footer-links">
              <li>
                <strong>Address:</strong>
                <p>314/4, Mark street<br /> Pondicherry - 605110</p>
              </li>
              <li>
                <strong>Mail Id:</strong>
                <p>bikespec@gmail.com</p>
              </li>
              <li>
                <strong>Contact Us:</strong>
                <p>9880868608</p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
