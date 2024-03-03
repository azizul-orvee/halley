import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const privacy = () => {
  return (
    <Layout>
    <Navbar />
    <div className="bg-white text-gray-800 container p-10 mt-16">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy for Azanate</h1>
        <p className="mb-2">Last Updated: 2024</p>
        <p className="mb-4">At Azanate, accessible from www.azanate.co.uk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Azanate and how we use it.</p>
        <p className="mb-4">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        
        <h2 className="text-xl font-semibold mb-2">Consent</h2>
        <p className="mb-4">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p className="mb-4">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p className="mb-4">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
        
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
        </ul>
      </div>
      <Footer />
      </Layout>
  )
}

export default privacy