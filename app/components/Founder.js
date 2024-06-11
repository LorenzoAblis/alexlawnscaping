// import alex from "../assets/alex.jpg";
import "../styles/Founder.scss";
import Image from "next/image";

const Founder = () => {
  return (
    <section className="founder-section" id="founder">
      <div className="founder-header">
        <h4 className="founder-subtitle">🌿 &nbsp; Our Founder &nbsp; 🌿 </h4>
        <h1 className="founder-title">Alex Madalinski</h1>
      </div>
      <article className="founder-content">
        <Image
          src="/alex.webp"
          alt="founder"
          width={1000}
          height={1000}
          objectFit="cover"
          className="next-img"
        />
        <div className="founder-text">
          Meet Alex, the visionary founder of M.P. Green Teens, a dynamic high
          school-run landscaping business. Combining a passion for nature, 3
          years of landscaping experience, and hard work with entrepreneurial
          spirit, Alex has cultivated a dedicated team of young landscapers
          committed to transforming local lawns and gardens in the bright
          community of Mount Prospect. Under his leadership, M.P. Green Teens is
          redefining landscaping services with fresh ideas, youthful energy, and
          a commitment to excellence.
        </div>
      </article>
    </section>
  );
};

export default Founder;
