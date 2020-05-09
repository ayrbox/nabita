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
      allFile(filter: { sourceInstanceName: { eq: "banners" } }) {
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
            className="hero-image"
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
      <Container
        style={{
          position: "absolute",
          zIndex: 99999,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
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
      </Container>
    </section>
  );
};

Hero.defaultProps = {
  socialMedia: []
};

export default Hero;
