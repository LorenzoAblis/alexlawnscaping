import Slogan from "./components/Slogan";
// import Benefits from "./components/Benefits";
// import Passion from "./components/Passion";
import { Toaster } from "react-hot-toast";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Feedback from "./components/Feedback";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 10000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 10000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Navbar />
      <main>
        <Slogan />
        {/* <Benefits /> */}
        {/* <Passion /> */}
        <Services />

        <Testimonials />
        <Feedback />
        <About />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}
