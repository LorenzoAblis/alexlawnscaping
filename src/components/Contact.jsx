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
    <section className="contact-section" id="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        <ContactCard
          icon="bi bi-geo-alt-fill"
          name="Address"
          content="819 S Central Rd, Mt Prospect IL"
        />
        <ContactCard
          icon="bi bi-envelope-fill"
          name="Email"
          content="info@yourdomain.com"
        />
        <ContactCard
          icon="bi bi-telephone-fill"
          name="Phone"
          content="312-444-1423"
        />
      </div>
    </section>
  );
};

export default Contact;
