import React from "react";
import Img from "gatsby-image";
import { parseISO, format } from "date-fns";

import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const NewsPage = ({ data }) => {
  const { news } = data;

  const { frontmatter, html } = news;

  const parsedDate = parseISO(frontmatter.date);

  return (
    <Layout title={frontmatter.title}>
      <section class="post-hero">
        <Img
          fluid={frontmatter.banner.childImageSharp.fluid}
          className="post-image"
        />

        <div class="post-info">
          <h1>{frontmatter.title}</h1>
          <time datetime={frontmatter.date} itemprop="datePublished">
            {format(parsedDate, "dd/MM/yyyy")}
          </time>
          {frontmatter.author && (
            <span
              itemprop="author"
              itemscope
              itemtype="http://schema.org/Person"
            >
              - <span itemprop="name">{frontmatter.author}</span>
            </span>
          )}
        </div>
      </section>
      <section class="page-section">
        <article
          class="container"
          itemscope
          itemtype="http://schema.org/BlogPosting"
        >
          <header class="post-header">
            <h2
              class="page-section-head text-center pb-5"
              itemprop="name headline"
            >
              {frontmatter.title}
            </h2>
          </header>
          <div
            class="post-content"
            itemprop="articleBody"
            dangerouslySetInnerHTML={{
              __html: html
            }}
          ></div>
        </article>
      </section>
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    news: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        title
        author
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default NewsPage;
