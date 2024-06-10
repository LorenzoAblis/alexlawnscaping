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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolorum ex quis et ducimus deleniti omnis delectus totam sit doloribus
          dolores cumque, mollitia harum aspernatur iusto magni officiis!
          Libero, possimus?
        </p>
        <div className="link-container">
          <a href="#benefits">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
