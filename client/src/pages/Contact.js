import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          Our team is here to assist you with any concerns related to our products or services. We aim to respond to all inquiries within 24-48 hours.

Thank you for choosing Antique Vault!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.antiquevault.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1800-1800 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;