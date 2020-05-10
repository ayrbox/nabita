import React from "react";

import "../sass/index.scss";

import Navigation from "../components/Navigation";
import Head from "./Head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <main>
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default Layout;
