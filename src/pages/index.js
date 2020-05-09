import React from "react";

import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
