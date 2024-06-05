// import lawn from "../../public/lawn.jpg";
import Image from "next/image";
import "../styles/Slogan.scss";

const Slogan = () => {
  return (
    <section className="slogan-section">
      <Image
        src="/lawn.jpg"
        alt="lawn"
        fill
        objectFit="cover"
        className="next-img"
      />
      <div className="img-overlay"></div>

      <div className="slogan-text">
        <h1>Transforming lawns into stunning outdoor spaces</h1>
        <p>
          Welcome to M.P. Green Teens, where we specialize in creating beautiful
          and functional outdoor environments. With our expertise and top-notch
          services, we'll turn your lawn into a masterpiece.
        </p>
        <div className="link-container">
          <a href="#benefits">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
