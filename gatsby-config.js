module.exports = {
  siteMetadata: {
    title: "Nabita Shrestha"
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
    }
  ]
};
