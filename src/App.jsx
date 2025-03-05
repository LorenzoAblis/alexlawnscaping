import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Pricing />
      <Services />
      <Testimonials />
    </>
  );
};

export default App;
