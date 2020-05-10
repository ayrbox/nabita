import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        meta: siteMetadata {
          social {
            fb
            ig
            linkedin
          }
        }
      }
    }
  `);

  const { fb, ig, linkedin } = site.meta.social;

  return (
    <div className="social-icons">
      <a href={fb} target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
      <a href={ig} target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialIcons;
