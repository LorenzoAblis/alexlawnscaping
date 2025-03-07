const ContactCard = ({ icon, name, content }) => {
  return (
    <div className="md:w-1/2">
      <i className={`${icon} text-5xl text-accent`}></i>
      <h3 className="text-xl font-bold mt-3">{name}</h3>
      <p>{content}</p>
    </div>
  );
};
const Contact = () => {
  return (
    <section
      className="flex flex-col items-center text-center mt-15"
      id="contact"
    >
      <div>
        <h4 className="text-2xl font-bold text-secondary">Contact</h4>
        <h2 className="text-3xl mt-5 font-bold text-primary">Reach Out!</h2>
      </div>
      <div className="flex flex-col items-center mt-10 gap-10 md:flex-row md:w-full md:gap-0">
        <ContactCard
          icon="bi bi-envelope-fill"
          name="Email"
          content="mpgreenteens@gmail.com"
        />
        <ContactCard
          icon="bi bi-telephone-fill"
          name="Phone"
          content="+1 224-522-4243"
        />
      </div>
    </section>
  );
};

export default Contact;
