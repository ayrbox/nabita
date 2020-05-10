module.exports = {
  siteMetadata: {
    title: "Nabita Shrestha",
    social: {
      fb: "https://www.facebook.com/nabita.shrestha1/",
      ig: "https://www.instagram.com/navy.shrestha1/",
      linkedin: "https://www.linkedin.com/in/nabita-shrestha-0190a210b/"
    }
  },
  pathPrefix: "/nabita",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        clssLoaderOptions: {
          camelCase: false
        }
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "banners",
        path: `${__dirname}/images/banners`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`
      }
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- -->`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gallery",
        path: `${__dirname}/images/gallery`
      }
    }
  ]
};
