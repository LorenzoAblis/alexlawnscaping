import PropTypes from "prop-types";

import "../styles/Testimonials.scss";

const TestimonialsCard = ({ name, content }) => {
  return (
    <article className="card">
      <p className="testimonials-text">{content}</p>
      <h4 className="testimonials-name">- {name}</h4>
    </article>
  );
};

TestimonialsCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials-section">
      <div className="testimonials-header">
        <h4 className="testimonials-subtitle fw-semibold">Testimonals</h4>
        <h2 className="testimonials-title fw-semibold">
          Voices of Satisfied Customers
        </h2>
      </div>
      <div className="testimonials-content">
        <TestimonialsCard
          name="Joe G"
          content="Exceptional lawn care service! My yard has never looked better."
        />
        <TestimonialsCard
          name="Chase Bank"
          content="I've been using Alex Lawnscaping for years now, and I couldn't be
            happier with the results! Their attention to detail and commitment
            to keeping my lawn lush and vibrant have truly transformed my
            outdoor space."
        />
        <TestimonialsCard
          name="Love Q"
          content="Top-notch service! They transformed my lawn beautifully."
        />
        <TestimonialsCard
          name="Guvienvere B"
          content="Highly recommend! Their weed control is the best."
        />
        <TestimonialsCard
          name="Bobby G"
          content="I recently hired Alex Lawnscaping to take care of my lawn, and I'm
            amazed at the difference it's made! Their professional team not only
            delivered exceptional results but also provided valuable tips to
            maintain the beauty of my lawn year-round. I highly recommend their
            services!"
        />
        <TestimonialsCard
          name="Enzo Ablis"
          content="Their edging job was the best!"
        />
        <TestimonialsCard
          name="Joe G"
          content="Exceptional lawn care service! My yard has never looked better."
        />
        <TestimonialsCard
          name="Chase Bank"
          content="I've been using Alex Lawnscaping for years now, and I couldn't be
            happier with the results! Their attention to detail and commitment
            to keeping my lawn lush and vibrant have truly transformed my
            outdoor space."
        />
        <TestimonialsCard
          name="Love Q"
          content="Top-notch service! They transformed my lawn beautifully."
        />
        <TestimonialsCard
          name="Guvienvere B"
          content="Highly recommend! Their weed control is the best."
        />
        <TestimonialsCard
          name="Bobby G"
          content="I recently hired Alex Lawnscaping to take care of my lawn, and I'm
            amazed at the difference it's made! Their professional team not only
            delivered exceptional results but also provided valuable tips to
            maintain the beauty of my lawn year-round. I highly recommend their
            services!"
        />
        <TestimonialsCard
          name="Enzo Ablis"
          content="Their edging job was the best!"
        />
      </div>
    </section>
  );
};

export default Testimonials;
