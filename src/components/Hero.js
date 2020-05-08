import React from "react";

const Hero = ({ socialMedia }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="hero-content">
              <h1 className="display-1">
                Nabita <strong>SHRESTHTA</strong>
              </h1>
              <p>
                <strong>PROFESSIONAL TABLE TENNIS PLAYER</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-right">
            {socialMedia.map(({ url, title }) => (
              <a
                href={url}
                className="btn btn-link hero-social-link"
                target="_blank"
              >
                <i className="fa fa-title fa-2x"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  socialMedia: []
};

export default Hero;
