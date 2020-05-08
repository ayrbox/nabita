import React from "react";
import PropTypes from "prop-types";

const ContactSection = ({ email, socialMedia }) => {
  return (
    <div className="page-section contact" id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h4>Nabita</h4>
            <p>
              I am Nepalese Professional Table Tennis Player who have secured
              National Championship 7 times and associated with Nepal Police
              Club Team. I have been honored and awarded multiple titles
              throughout the beginning of my career. I hold MBA degree from
              Shinawatra University.
            </p>
            <p>
              To stay connected, please do follow me in social media or just
              drop an email.
            </p>
          </div>

          <div className="col-sm-2">&nbsp;</div>

          <div className="col-sm-5">
            <div className="row">
              <div className="col">
                <a className="contact-email" href="mailto:{{site.email}}">
                  <i className="fa fa-envelope"></i>
                  {email}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {socialMedia.map(({ id, title, url }) => (
                  <a href="{{ url }}" key={id}>
                    className="btn btn-link hero-social-link" target="_blank">
                    <i className="fa fa-{{ title }} fa-2x"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactSection.defaultProps = {
  email: "hello@nabitashrestha.com",
  socialMedia: []
};

export default ContactSection;
