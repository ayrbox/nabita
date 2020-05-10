import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import LightBox from "../components/LightBox";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  const { galleryImages } = useStaticQuery(graphql`
    query {
      galleryImages: allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
            fixed(height: 250, width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const handleGalleryItemClick = idx => e => {
    e.preventDefault();
    setShowLightBox(true);
    setSelectedImage(idx);
  };

  const handleCloseLightbox = () => {
    setShowLightBox(false);
  };

  const handleLightboxNav = direction => {
    const newIdx = selectedImage + direction;
    const imageIdx =
      newIdx < 0
        ? galleryImages.nodes.length - 1
        : newIdx === galleryImages.nodes.length
        ? 0
        : newIdx;
    setSelectedImage(imageIdx);
  };

  return (
    <section className="page-section" id="gallery">
      <div className="container">
        <h4 className="page-section-heading text-center pb-5">Gallery</h4>
        <div className="gallery">
          {galleryImages.nodes.map(({ id, childImageSharp }, idx) => (
            <a
              className="gallery-item"
              key={id}
              href={childImageSharp.fluid.src}
              onClick={handleGalleryItemClick(idx)}
            >
              <Img
                key={id}
                fixed={childImageSharp.fixed}
                className="gallery-image"
              />
            </a>
          ))}
        </div>
      </div>
      {showLightBox && (
        <LightBox
          image={galleryImages.nodes[selectedImage].childImageSharp}
          onClose={handleCloseLightbox}
          onNavigation={handleLightboxNav}
        />
      )}
    </section>
  );
};

export default Gallery;
