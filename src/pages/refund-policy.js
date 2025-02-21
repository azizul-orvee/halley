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
        <h1 className="text-2xl font-bold mb-4">Refund Policy for SylAuto Tyres</h1>
        <p className="mb-4">At SylAuto Tyres, we are committed to providing you with exceptional service and quality. We understand that sometimes things do not go as planned, and we are here to help ensure your satisfaction. Here is our easy refund policy, designed with you in mind:</p>

        <h2 className="text-xl font-semibold mb-2">Delays in Service</h2>
        <p className="mb-4">We aim to be punctual and efficient with our mobile tyre fitting service. However, please understand that delays may occasionally occur due to traffic congestion, adverse weather conditions, or other unforeseen road circumstances. In such cases, we appreciate your patience and understanding that refunds cannot be issued for delays caused by these external factors.</p>

        <h2 className="text-xl font-semibold mb-2">Refund Eligibility</h2>
        <p className="mb-4"><span className='font-bold'>Incorrect Tyre Size or Specification: </span> If we supply a tyre that does not match the specifications you provided, we will replace it at no extra cost or offer a full refund. <br />{" "}
        <span className='font-bold'>Service Issues:</span>  If you are dissatisfied with the service due to a fault of ours, please contact us within 24 hours of the service completion. We will investigate the matter and, where appropriate, offer a refund or corrective service. <br />{" "}
        <span className='font-bold'>Cancellation Policy: </span> Cancellations made at least 24 hours before the scheduled appointment time are eligible for a full refund. Cancellations made within 12 hours of the appointment time may incur a cancellation fee.</p>

        <h2 className="text-xl font-semibold mb-2">Non-refundable Situations
</h2>
        <p className="mb-4"><span className='font-bold'>Late Arrival:</span> As mentioned, refunds will not be issued for service delays outside of our control, including traffic delays or road conditions.<br />{" "}
        <span className='font-bold'>Change of Mind:</span> If the service has been completed as requested, but you have changed your mind, refunds cannot be offered.</p>

        <h2 className="text-xl font-semibold mb-2">Your Satisfaction Is Our Priority
</h2>
<p className="mb-4">Our goal is to ensure your complete satisfaction with our mobile tyre fitting service. If you have any concerns or issues, please do not hesitate to contact us. We are here to help and ensure that your experience with us is as smooth and hassle-free as possible.</p>
      </div>
      <Footer />
      </Layout>
      </>

  )
}
export default refund