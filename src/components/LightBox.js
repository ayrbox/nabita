import React, { useEffect } from "react";
import Img from "gatsby-image";
import { FaCaretRight, FaCaretLeft, FaTimes } from "react-icons/fa";

const LightBox = ({ image, onNavigation, onClose }) => {
  const handleNavigation = direction => e => {
    e.preventDefault();
    onNavigation(direction);
  };

  const handleKeys = e => {
    e.stopPropagation();
    const { keyCode } = e;
    switch (keyCode) {
      case 27: {
        // escape
        onClose();
        break;
      }
      case 37: {
        // left arrow key
        onNavigation(-1);
        break;
      }
      case 39: {
        //right arrow key
        onNavigation(1);
        break;
      }
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeys);
    return () => {
      document.removeEventListener("keyup", handleKeys);
    };
  });

  return (
    <div className="lightbox-wrapper">
      <FaCaretLeft className="lightbox-nav" onClick={handleNavigation(-1)} />
      <div className="lightbox-content">
        <Img fluid={image.fluid} />
      </div>
      <FaCaretRight className="lightbox-nav" onClick={handleNavigation(1)} />
      <FaTimes className="lightbox-close" onClick={onClose} />
    </div>
  );
};

export default LightBox;
