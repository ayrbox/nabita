import React from "react";
import Helmet from "react-helmet";

const Head = ({ title }) => (
  <Helmet
    htmlAttributes={{
      lang: "en"
    }}
    title={title}
    titleTemplate={`%s | Nabita Shrestha`}
  />
);

Head.defaultProps = {
  title: "Home"
};

export default Head;
