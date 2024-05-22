import PropTypes from "prop-types";

import mowing from "../assets/mowing.jpg";
import edging from "../assets/edging.png";
import fertilization from "../assets/fertilization.jpg";
import "../styles/Services.scss";

const ServicesCard = ({ img, title, subtitle }) => {
  return (
    <article className="card">
      <img src={img} alt="" className="shadow" />
      <h3 className="fw-bold card-title">{title}</h3>
      <p className="card-text">{subtitle}</p>
    </article>
  );
};

ServicesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const Services = () => {
  return (
    <section className="services-section" id="services-section">
      <div className="services-header">
        <h1 className="fw-bold services-title">My Services</h1>
        <h5 className="services-subtitle">
          I provide a comprehensive range of services in the lawnscaping
          industry, ensuring your lawn stays healthy and beautiful all year
          round.
        </h5>
      </div>
      <div className="services-content">
        <ServicesCard
          img={mowing}
          title="Mowing"
          subtitle="My mowing service ensures your lawn can breathe, promoting root
            growth and improving water and nutrient absorption. Let me help your
            lawn thrive with my profession."
        />
        <ServicesCard
          img={edging}
          title="Edging"
          subtitle="Edging gives your lawn a clean, manicured look. My expertise creates
            clear lines between your lawn and adjacent areas, enhancing the
            overall aesthetic of your outdoor space."
        />
        <ServicesCard
          img={fertilization}
          title="Fertilization"
          subtitle="Fertilizing is key to a lush, green lawn. I provide a balanced blend
            of nutrients tailored to your lawn's specific needs, promoting
            healthy growth and resilience."
        />
      </div>
    </section>
  );
};

export default Services;
