import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
          <div className="container">
            <Link to="/">
              <a className="navbar-brand">
                <img src="logo.png" alt="SHRI Logo" className="brand-image" />
                <span className="brand-text font-weight-light">
                  Onsite EEW System
                </span>
              </a>
            </Link>
          
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
              <ul className="navbar-nav float-right">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
