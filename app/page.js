import { Toaster } from "react-hot-toast";

import Slogan from "./components/Slogan";
import SnowRemoval from "./components/SnowRemoval";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Feedback from "./components/Feedback";
import About from "./components/About";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
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
        <dir className="blue-bar">wd</dir>
        <SnowRemoval />
        <dir className="blue-bar">wd</dir>
        <Pricing />
        <Services />
        <Testimonials />
        <Feedback />
        <About />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
