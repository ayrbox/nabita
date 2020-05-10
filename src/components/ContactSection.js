import React from "react";
import { FaEnvelope } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";

const ContactSection = ({ email }) => {
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
                <a className="contact-email" href={`mailto:${email}`}>
                  <FaEnvelope style={{ marginRight: ".5rem" }} />
                  {email}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactSection.defaultProps = {
  email: "hello@nabitashrestha.com"
};

export default ContactSection;
