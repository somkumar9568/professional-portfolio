import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top py-3">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold fs-4 text-uppercase" href="#home">
          <span className="text-primary">My</span>Portfolio
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold position-relative" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold position-relative" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold position-relative" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold position-relative" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold position-relative" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Extra Styling */}
      <style jsx>{`
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #0d6efd !important;
        }
        .nav-link::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #0d6efd;
          transition: width 0.3s;
          margin: auto;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
