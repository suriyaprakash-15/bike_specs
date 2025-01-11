import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  return (
    <div className="bs-example">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ background: "cadetblue" }}>
        <a href="/Btn" className="navbar-brand">
          BIKE SPECS
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav">
            {/* <a href="/adminlogin" className="nav-item nav-link"> */}
            <a href="./Btn" className="nav-item nav-link">
              Home
            </a>
            <a href="/Mainn" className="nav-item nav-link">
              Spec
            </a>
            <a href="/Appp" className="nav-item nav-link">
              Service
            </a>
          </div>

          <div className="navbar-nav">
            <a href="/contactus" className="nav-item nav-link">
              Customer Feedback
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;