import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { parseISO, formatDistance, format } from "date-fns";

const NewsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      markdown: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              date
              title
              thumbnail {
                childImageSharp {
                  fixed(height: 400, width: 400) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.markdown.edges.map(({ node }) => node);

  return (
    <section className="page-section" id="news">
      <h4 className="page-section-heading text-center pb-5">News</h4>
      <div className="news-wrapper">
        {posts.map(({ frontmatter, excerpt }) => {
          const parsedDate = parseISO(frontmatter.date);
          return (
            <div className="news-card">
              <div className="news-card-image-container">
                <Img
                  fixed={frontmatter.thumbnail.childImageSharp.fixed}
                  className="card image cap"
                />
              </div>
              <div className="news-body">
                <span className="news-date">
                  {format(parsedDate, "dd/MM/yyyy")}
                  {"  "}
                  {formatDistance(parsedDate, new Date())}
                </span>
                <h5 className="news-title">
                  <a href="{{post.url | prepend: site.baseurl }}">
                    {frontmatter.title}
                  </a>
                </h5>
                <div dangerouslySetInnerHTML={{ __html: excerpt }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewsSection;
