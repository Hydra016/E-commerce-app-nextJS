import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function About() {
  return (
    <div>
      <Header dontShowHeaderImg={true} aboutHeader={true} />
      <img src='https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80' alt='sub-image' className='nav-image'/>
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <span className="about-content">
          Welcome to <span className="about-name">AmazeMe</span>, an online store offering a wide
          variety of clothes, electronics, jewelry, and more. We're a personal
          project created by a team of dedicated frontend developers who are
          passionate about creating beautiful, functional websites. Our mission
          is to provide our customers with an enjoyable and convenient shopping
          experience from the comfort of their own homes. We believe that
          everyone should have access to high-quality products at affordable
          prices, and we strive to make that possible through our wide selection
          and competitive pricing. At AmazaMe, we're committed to
          providing exceptional customer service. Whether you have a question
          about a product or need assistance with your order, our friendly and
          knowledgeable team is here to help. We value our customers and are
          always looking for ways to improve our service to better meet your
          needs. We believe in the importance of sustainability and ethical
          business practices, which is why we partner with suppliers who share
          our values. We're constantly working to improve our environmental
          footprint and reduce waste in all areas of our business. Thank you for
          choosing AmazaMe as your online shopping destination.
          We're excited to help you find the perfect product and look forward to
          serving you for years to come.
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default About;
