import { FittersHero } from "../components/FittersHero";
import Layout from "../components/Layout";
import { Testimonial } from "../components/Testimonial";
import { Whyus } from "../components/Whyus";
import { Services } from "../components/Services";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <Layout>
      <FittersHero />
      <Services />
      <Whyus />
      <Faq />
      <Testimonial />
    </Layout>
  );
}
