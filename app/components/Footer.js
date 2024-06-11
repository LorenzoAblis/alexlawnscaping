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
            <p>
              <i className="bi bi-telephone-fill"></i> +1 224-522-4243
            </p>
          </div>
          <div className="email">
            <i className="bi bi-envelope-fill"></i> mpgreenteens@gmail.com
          </div>
        </section>
        <p className="copy">&copy; M.P. Green Teens. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
