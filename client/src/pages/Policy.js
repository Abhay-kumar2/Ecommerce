import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At Antique Vault, we value your privacy and are committed to protecting your personal
             data. This Privacy Policy explains how we collect, use, and safeguard your information 
             when you visit our website .
             By using our services, you agree to the practices outlined in this policy.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;