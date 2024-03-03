import { EmergencyHero } from "../components/EmergencyHero";
import Layout from "../components/Layout";
import { Testimonial } from "../components/Testimonial";
import { Whyus } from "../components/Whyus";
import { Services } from "../components/Services";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <Layout>
      <EmergencyHero />
      <Services />
      <Whyus />
      <Faq />
      <Testimonial />
    </Layout>
  );
}
