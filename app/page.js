import Slogan from "./components/Slogan";
import Benefits from "./components/Benefits";
import Passion from "./components/Passion";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Slogan />
        <Benefits />
        <Passion />
        <Services />
        <Testimonials />
        <About />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}