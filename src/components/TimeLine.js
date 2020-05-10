import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaTrophy, FaStar, FaGraduationCap } from "react-icons/fa";

const TimeLine = () => {
  const { timeline } = useStaticQuery(graphql`
    query {
      timeline: allTimelinesYaml {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  `);

  const data = timeline.edges.map(({ node }) => node);

  return (
    <Fragment>
      <section class="page-section page-section--pink" id="honoursawards">
        <div class="container">
          <h4 class="text-center mb-5">HONORS &amp; AWARDS</h4>
          <div class="row">
            <div class="col">
              <h1 class="text-center">
                <FaTrophy />
              </h1>
              <p class="text-center">
                <strong>MAJOR TROPIES</strong>
              </p>
            </div>
            <div class="col">
              <h1 class="text-center">
                <FaStar />
              </h1>
              <p class="text-center">
                <strong>HONORS &amp; ACHIEVENMENTS</strong>
              </p>
            </div>
            <div class="col">
              <h1 class="text-center">
                <FaGraduationCap />
              </h1>
              <p class="text-center">
                <strong>EDUCATIONS</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section timeline">
        <div class="container timeline-entries">
          {data.map(({ id, name, description }) => (
            <div class="entry" key={id}>
              <div class="title">{name}</div>
              <div class="body">
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TimeLine;
