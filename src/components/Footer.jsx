const Footer = () => {
  return (
    <footer className="bg-black mt-25">
      <div className="footer-content p-5">
        <div className="question">
          <h2 className="fw-bold text-text font-bold text-3xl">
            Need your <span className="text-accent">lawn</span> mowed?
          </h2>
          <hr class="border-4 border-accent bg-accent w-full opacity-100 my-3" />
        </div>
        <section className="contact text-text">
          <div className="phone pb-1">
            <p>
              <i className="bi bi-telephone-fill"></i> +1 224-522-4243
            </p>
          </div>
          <div className="email">
            <i className="bi bi-envelope-fill"></i> mpgreenteens@gmail.com
          </div>
        </section>
        <p className="text-text text-center mt-5">
          &copy; M.P. Green Teens. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
