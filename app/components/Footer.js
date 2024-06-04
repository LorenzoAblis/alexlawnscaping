import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-black p-3">
      <div className="footer-content">
        <div className="question">
          <h1 className="fw-bold">
            Need your <span>lawn</span> mowed?
          </h1>
          <hr />
        </div>
        <section className="contact">
          <div className="phone pb-1">
            <i className="bi bi-telephone-fill"></i> 312-444-1423
          </div>
          <div className="email">
            <i className="bi bi-envelope-fill"></i> info@yourdomain.com
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
