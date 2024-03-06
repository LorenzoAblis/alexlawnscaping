import mowing from "../assets/mowing.jpg";
import edging from "../assets/edging.png";
import fertilization from "../assets/fertilization.jpg";
import "../styles/Services.scss";

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
        <article className="card">
          <img src={mowing} alt="" className="shadow" />
          <h3 className="fw-bold card-title">Mowing</h3>
          <p className="card-text">
            My mowing service ensures your lawn can breathe, promoting root
            growth and improving water and nutrient absorption. Let me help your
            lawn thrive with my profession
          </p>
        </article>
        <article className="card">
          <img src={edging} alt="" className="shadow" />
          <h3 className="fw-bold card-title">Edging</h3>
          <p className="card-text">
            Edging gives your lawn a clean, manicured look. My expertise creates
            clear lines between your lawn and adjacent areas, enhancing the
            overall aesthetic of your outdoor space.
          </p>
        </article>
        <article className="card">
          <img src={fertilization} alt="" className="shadow" />
          <h3 className="fw-bold card-title">Fertilization</h3>
          <p className="card-text">
            Fertilizing is key to a lush, green lawn. I provide a balanced blend
            of nutrients tailored to your lawn's specific needs, promoting
            healthy growth and resilience.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
