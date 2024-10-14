// import alex from "../assets/alex.jpg";
import "../styles/About.scss";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section" id="about">
      <Image
        src="/team.webp"
        alt="team"
        width={1000}
        height={1000}
        objectFit="cover"
        className="next-img"
      />
      <article className="about-content">
        <div className="about-header">
          <h1 className="about-title">About The Team!</h1>
        </div>
        <div className="about-text">
          M.P. Green Teens is a team of passionate high school students
          dedicated to transforming your outdoor spaces. Every member is a young
          and hard-working entrepreneur who comes from Prospect High School. We
          bring fresh prospectives and youthful energy to the neighborhood
          providing fall cleanup & lawnscaping to Mount Prospect, Illinois.
          Top-notch care is ensured on every project to make sure we satisfy
          your needs. From gardening to mowing lawns, we got you covered.
        </div>
      </article>
    </section>
  );
};

export default About;
