import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Antique Vault, your trusted destination for rare and timeless antiques. Our passion for history and craftsmanship drives us to curate a unique collection of vintage treasures from around the world. Whether you're an avid collector or looking for a special piece to add character to your space, we are dedicated to providing authentic, high-quality antiques with exceptional service.

At Antique Vault, every item has a story, and we are here to help you discover it.

Thank you for being a part of our journey!


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;