import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          Bishan Webeshete
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="/"
            >
              Home
            </a>
            <a className="nav-link text-light" href="/">
              About
            </a>
            <a className="nav-link text-light" href="/">
              Projects
            </a>
            <a
              className="nav-link disabled text-light"
              aria-disabled="true"
              href="/"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
