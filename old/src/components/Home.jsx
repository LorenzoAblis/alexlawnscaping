/* eslint-disable react/no-unescaped-entities */

import Slogan from "./Slogan";
import Benefits from "./Benefits";
import Passion from "./Passion";
import Services from "./Services";
import Testimonials from "./Testimonials";
import About from "./About";
import Contact from "./Contact";
import Location from "./Location";
import "../styles/Home.scss";

const Home = () => {
  return (
    <main>
      <Slogan />
      <Benefits />
      <Passion />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      {/* <Location /> */}
    </main>
  );
};

export default Home;
