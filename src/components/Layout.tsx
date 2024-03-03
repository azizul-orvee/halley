import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { GoogleTagManager } from '@next/third-parties/google'


const Layout = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Moon Tyre",
    description: `We provide mobile tyre fitting service in the UK`,
    image: "/images/seo/halley-banner.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="min-w-[350px] overflow-x-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </main>
      <GoogleTagManager gtmId="GTM-5MRL9TVX" />
    </div>
  );
};

export default Layout;
