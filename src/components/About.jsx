import alex from "../assets/alex.jpg";
import "../styles/About.scss";

const About = () => {
  return (
    <section className="about-section" id="about-section">
      <img src={alex} alt="" />
      <article className="about-content">
        <div className="about-header">
          <h4 className="about-subtitle">About Me</h4>
          <h1 className="about-title">Alex Madalinski</h1>
        </div>
        <div className="about-text">
          My name is Alex, and I'm dedicated to providing high-quality lawn care
          services to homeowners and businesses in Mount Prospect. With a
          passion for landscaping and a keen eye for detail, I founded Alex's
          Lawnscaping to help clients achieve beautiful and well-maintained
          outdoor spaces they can enjoy year-round. As a sole proprietor, I take
          pride in personally overseeing every aspect of your lawn care needs. I
          look forward to the opportunity to work with you and transform your
          outdoor space into a lush and inviting landscape you'll love. Contact
          me today to schedule a consultation, and let's bring your lawnscaping
          vision to life!
        </div>
      </article>
    </section>
  );
};

export default About;
