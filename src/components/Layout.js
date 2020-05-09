import React from "react";
import Navigation from "../components/Navigation";
import "../sass/index.scss";

const Layout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default Layout;
