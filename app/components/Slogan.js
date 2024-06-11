// import lawn from "../../public/lawn.jpg";
import Image from "next/image";
import "../styles/Slogan.scss";

const Slogan = () => {
  return (
    <section className="slogan-section">
      <Image
        src="/lawn.webp"
        alt="lawn"
        fill
        objectFit="cover"
        className="next-img"
      />
      <div className="img-overlay"></div>

      <div className="slogan-text">
        <h1>Transforming lawns into stunning outdoor spaces</h1>
        <p>
          Welcome to M.P. Green Teens! Our mission is to transform your lawns
          and gardens into beautiful, vibrant spaces. Let us help you achieve
          your landscaping goals, enhancing both the beauty of your home and
          your enjoyment of the outdoors.
        </p>
        <div className="link-container">
          <a href="#services">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
