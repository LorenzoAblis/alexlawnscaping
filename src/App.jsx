import Layout from "./components/Layout";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Feedback from "./components/Feedback";
import About from "./components/About";
import Founder from "./components/Founder";
import Contact from "./components/Contact";

export const App = () => {
  return (
    <>
      <Layout>
        <Landing />
        <Pricing />
        <Services />
        <Testimonials />
        <Feedback />
        <About />
        <Founder />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
