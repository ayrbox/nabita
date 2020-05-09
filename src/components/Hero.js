import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container
} from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const CustomSliderItem = imgSrc => props => <Img fluid={imgSrc} {...props} />;

const Hero = ({ socialMedia }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesData = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "banners" } }
        sort: { fields: name }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const images = imagesData.allFile.nodes.map(({ id, childImageSharp }) => ({
    id,
    fluid: childImageSharp.fluid
  }));

  const next = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    setActiveIndex(newIndex);
  };

  return (
    <section className="hero-wrapper" id="home">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {images.map(img => (
          <CarouselItem
            key={img.id}
            className="hero-image-item"
            tag={CustomSliderItem(img.fluid)}
          />
        ))}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Container className="hero-text-wrapper">
        <h1 className="display-1 hero-name">
          <strong>Nabita </strong>
          SHRESTHA
        </h1>
        <p>
          <strong>PROFESSIONAL TABLE TENNIS PLAYER</strong>
        </p>
        {socialMedia.map(({ url, title }) => (
          <a
            href={url}
            className="btn btn-link hero-social-link"
            target="_blank"
          >
            <i className="fa fa-title fa-2x"></i>
          </a>
        ))}
      </Container>
    </section>
  );
};

Hero.defaultProps = {
  socialMedia: []
};

export default Hero;
