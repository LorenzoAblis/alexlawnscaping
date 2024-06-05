"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { db } from "/firebaseConfig";
import { ref, onValue } from "firebase/database";

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
  const [testimonials, setTestimonials] = useState([]);

  const fetchFeedback = () => {
    const itemsRef = ref(db, "feedback");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newItems = Object.values(data).filter((item) => item.approved);
        setTestimonials(newItems);
      }
    });
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h4 className="testimonials-subtitle fw-semibold">Testimonials</h4>
        <h2 className="testimonials-title fw-semibold">
          Voices of Satisfied Customers
        </h2>
      </div>
      <div className="testimonials-content">
        {testimonials.map(
          (testimonial, index) =>
            testimonial.approved && (
              <TestimonialsCard
                name={testimonial.name}
                content={testimonial.msg}
                key={index}
              />
            )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
