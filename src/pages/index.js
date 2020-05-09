import React from "react";

import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewsSection from "../components/NewsSections";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <NewsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
