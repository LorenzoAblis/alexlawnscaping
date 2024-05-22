import lawn from "../assets/lawn.jpg";
import "../styles/Slogan.scss";

const Slogan = () => {
  return (
    <section className="slogan-section">
      <div className="slogan-text">
        <h1>Transforming lawns into stunning outdoor spaces</h1>
        <p>
          Welcome to Alex Lawnscaping, where I specialize in creating beautiful
          and functional outdoor environments. With my expertise and top-notch
          services, I'll turn your lawn into a masterpiece.
        </p>
        <div>
          <a href="#passion-section">Learn More</a>
        </div>
      </div>
      <img src={lawn} alt="lawn" className="shadow-lg" />
    </section>
  );
};

export default Slogan;
