import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";


const refund = () => {
  return (
    
   <>
    <Layout>
    <Navbar />
      <div className="bg-white text-gray-800 container p-10 mt-16">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions for Azanate</h1>
        <p className="mb-4">Welcome to Azanate! By using our website (www.azanate.co.uk), you agree to these terms and conditions. Please read them carefully.</p>

        <h2 className="text-xl font-semibold mb-2">Use of Our Service</h2>
        <p className="mb-4">Azanate provides a 24-hour emergency mobile fitting service across the UK. By accessing and using our service, you agree to comply with the terms outlined here and any applicable laws and regulations.</p>

        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p className="mb-4">Our website uses cookies to enhance your experience. Cookies are small data files placed on your device to help our site provide a better user experience. In general, cookies are used to retain user preferences and provide anonymized tracking data to third party applications like Google Analytics. As a rule, cookies will make your browsing experience better. However, you may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest consulting the Help section of your browser or taking a look at the About Cookies website which offers guidance for all modern browsers.</p>

        <h2 className="text-xl font-semibold mb-2">Privacy</h2>
        <p className="mb-4">Your privacy is important to us. Our Privacy Policy explains how we collect, use, protect, and when necessary, disclose your personal information and data. By using our service, you agree to the terms of our Privacy Policy.</p>

        <h2 className="text-xl font-semibold mb-2">Modifications</h2>
        <p className="mb-4">Azanate reserves the right to modify these Terms and Conditions at any time. We will post the revised Terms and Conditions on this page, and they will become effective immediately upon posting. Your continued use of our service means you accept those changes.</p>

        <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
        <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Azanate operates. Any disputes related to these terms will be subject to the exclusive jurisdiction of the courts of that jurisdiction.</p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@azanate.co.uk" className="text-blue-500">support@azanate.co.uk</a>.</p>
      </div>
      <Footer />
      </Layout>
      </>

  )
}
export default refund