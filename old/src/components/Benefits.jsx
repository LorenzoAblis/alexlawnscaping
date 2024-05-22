import benefits from "../assets/benefits.jpg";
import "../styles/Benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <img src={benefits} alt="" className="shadow" />
      <div className="benefits-text">
        <section className="benefits-header">
          <h2>
            Enhance Your Outdoor Space with Professional Lawnscaping Services
          </h2>
          <p>
            Transform your lawn into a beautiful and inviting oasis with my
            professional lawnscaping services. I will ensure that your outdoor
            space is well-maintained, vibrant, and visually appealing.
          </p>
        </section>
        <section className="benefits-cards">
          <div className="benefits-card">
            <h3>Increase Curb Appeal</h3>
            <p>
              My lawnscaping services will significantly enhance the curb appeal
              of your property.
            </p>
          </div>
          <div className="benefits-card">
            <h3>Boost Property Value</h3>
            <p>
              Investing in professional lawnscaping can increase the value of
              your property.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Benefits;
