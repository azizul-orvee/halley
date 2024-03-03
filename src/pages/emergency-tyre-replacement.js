import { EmergencyRHero } from "../components/EmergencyRHero";
import Layout from "../components/Layout";
import { Testimonial } from "../components/Testimonial";
import { Whyus } from "../components/Whyus";
import { Services } from "../components/Services";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <Layout>
      <EmergencyRHero />
      <Services />
      <Whyus />
      <Faq />
      <Testimonial />
    </Layout>
  );
}
