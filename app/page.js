import Slogan from "./components/Slogan";
// import Benefits from "./components/Benefits";
// import Passion from "./components/Passion";
import { Toaster } from "react-hot-toast";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Feedback from "./components/Feedback";
import About from "./components/About";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
// import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 10000,
          style: {
            background: "#363636",
            color: "#fff",
          },

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
        <Founder />
        <Contact />
        {/* <Location /> */}
      </main>
      <Footer />
    </>
  );
}
