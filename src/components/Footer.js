import React from "react";

const Footer = ({ description }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto mr-auto">
            All right reserved. &copy; Copyright Nabita Shrestha
            {` ${new Date().getFullYear()}.`}
          </div>
          <div className="col-auto">
            {"Designed and Maintained by "}
            <a
              href="https://github.com/ayrbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              ayrbox
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
