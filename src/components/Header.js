import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {



  return (
    <>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
          <div className="container">
            <NavLink to="/">
              <div className="navbar-brand">
                <img src="logo.png" alt="SHRI Logo" className="brand-image" />
                <span className="brand-text font-weight-light">
                  Onsite EEW System
                </span>
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink  to="/" className="nav-link" activeclassname="active"> Home </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/about" className="nav-link" activeclassname="active"> About Us </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/help" className="nav-link" activeclassname="active"> Help </NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink  to="/contact" className="nav-link" activeclassname="active"> Contact Us </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/login" className="nav-link" activeclassname="active"> Login </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
