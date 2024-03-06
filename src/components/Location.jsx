/* eslint-disable react/no-unescaped-entities */
import "../styles/Location.scss";

const Location = () => {
  return (
    <section className="location-section" id="location-section">
      <iframe
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBsh6yJba2R7lA-Varqc1qL9--6Xgmdi_w&q=Mount Prospect, IL"
        className="shadow"
      ></iframe>
      <div className="location-content">
        <div>
          <h1 className="fw-bold">Find us Here</h1>
          <p className="location-text">
            My lawnscaping company is conveniently located at your service. You
            can find me on the map provided below. I am your local expert in
            Aeration, Edging, Fertilizing, Mowing, Trimming, and Weed Control.
            Don't hesitate to visit me for all your lawn care needs.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Location;
