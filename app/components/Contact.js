import PropTypes from "prop-types";

import "../styles/Contact.scss";

const ContactCard = ({ icon, name, content }) => {
  return (
    <div className="contact-card">
      <i className={icon}></i>
      <h3>{name}</h3>
      <p>{content}</p>
    </div>
  );
};

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-cards">
        <ContactCard
          icon="bi bi-envelope-fill"
          name="Email"
          content="info@yourdomain.com"
        />
        <ContactCard
          icon="bi bi-telephone-fill"
          name="Phone"
          content="224-522-4243"
        />
      </div>
    </section>
  );
};

export default Contact;
