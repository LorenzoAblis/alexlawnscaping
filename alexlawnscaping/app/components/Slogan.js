// import lawn from "../../public/lawn.jpg";
import Image from "next/image";
import "../styles/Slogan.scss";

const Slogan = () => {
  return (
    <section className="slogan-section">
      <Image src="/lawn.jpg" alt="lawn" fill className="next-img" />
      <div className="img-overlay"></div>

      <div className="slogan-text">
        <h1>Transforming lawns into stunning outdoor spaces</h1>
        <p>
          Welcome to Alex Lawnscaping, where I specialize in creating beautiful
          and functional outdoor environments. With my expertise and top-notch
          services, I'll turn your lawn into a masterpiece.
        </p>
        <div className="link-container">
          <a href="#passion-section">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
