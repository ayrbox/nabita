const { slash } = require("gatsby-core-utils");
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allNews: allMarkdownRemark {
        edges {
          news: node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const template = path.resolve("src/templates/post-template.js");

  result.data.allNews.edges.forEach(({ news }) => {
    createPage({
      path: `/news/${news.id}`,
      component: slash(template),
      context: {
        id: news.id
      }
    });
  });
};
