import Hero from "./home/Hero";
import Services from "./home/Services";
import About from "./home/About";
import Contact from "./home/Contact";
import Features from "./home/Features";
import Testimonials from "./home/Testimonials";
import Layout from "./layout/Layout";

function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default Home;
