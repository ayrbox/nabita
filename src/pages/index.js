import React from "react";

import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewsSection from "../components/NewsSections";
import TimeLine from "../components/TimeLine";
import Gallery from "../components/Gallery";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <NewsSection />
      <TimeLine />
      <Gallery />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
