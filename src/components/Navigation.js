import React from "react";

const Navigation = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-main sps sps--abv">
      <div className="container">
        <a className="navbar-brand" href="{{ site.baseurl }}/">
          {{ title }}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <div className="mr-auto">&nbsp;</div>
          <ul className="navbar-nav mt-2 mt-md-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#news" className="nav-link">
                Press Releases
              </a>
            </li>
            <li className="nav-item">
              <a href="/#honoursawards" className="nav-link">
                Honours &amp; Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
