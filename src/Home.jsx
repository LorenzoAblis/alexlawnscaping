import React from "react";
import logo from "./assets/logo.png";
import lawn from "./assets/lawn.jpg";
import passion from "./assets/passion.jpg";
import mowing from "./assets/mowing.jpg";
import edging from "./assets/edging.png";
import fertilization from "./assets/fertilization.jpg";
import about from "./assets/about.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <main className="shadow">
      <nav className="d-flex justify-content-between p-3 shadow">
        <img src={logo} alt="logo" />
        <div className="d-flex gap-5">
          <a href="#about-section">About</a>
          <a href="#services-section">Services</a>
          <a href="#location-section">Location</a>
          <button className="contact">
            <i className="bi bi-telephone-fill mr-3"></i> 312-444-1423
          </button>
        </div>
      </nav>
      <section className="slogan-section">
        <img src={lawn} alt="lawn" />
        <h1>Where Lawns Thrive, We Arrive.</h1>
      </section>

      <section className="passion-section">
        <img src={passion} alt="" className="shadow-lg" />

        <section className="passion-content d-flex">
          <div className="vertical" />
          <article className="passion-article">
            <h1 className="fw-bold passion-title">Mowing with Passion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              culpa distinctio, quisquam saepe exercitationem facere eligendi
              natus minima expedita commodi ut tempora sed repellendus atque
              eveniet fugiat! Obcaecati maiores natus laborum itaque, ducimus
              veritatis in suscipit deleniti eveniet explicabo quaerat voluptas
              earum adipisci illum fugit dignissimos neque ab sunt! Minima sint
              adipisci exercitationem voluptas eum impedit iure, beatae debitis
              et? Eum expedita dolorum corrupti reprehenderit. Natus libero
              officia rerum perspiciatis sapiente incidunt nam iste fugit
              consectetur id! Placeat architecto repellendus nobis perferendis.
              Vero, obcaecati dolores ea quidem voluptatum a nisi sequi culpa
              placeat in soluta aliquam, impedit deleniti nesciunt quo!
            </p>
          </article>
        </section>
      </section>

      <section className="services-section" id="services-section">
        <div className="services-header">
          <h1 className="fw-bold services-title">Our Services</h1>
          <h5 className="services-subtitle">
            We provide a comprehensive range of services in the Lawn Care
            industry, ensuring your lawn stays healthy and beautiful all year
            round.
          </h5>
        </div>
        <div className="services-content">
          <article className="card">
            <img src={mowing} alt="" className="shadow" />
            <h3 className="fw-bold card-title">Mowing</h3>
            <p className="card-text">
              Our mowing service ensures your lawn can breathe, promoting root
              growth and improving water and nutrient absorption. Let us help
              your lawn thrive with our profession
            </p>
          </article>
          <article className="card">
            <img src={edging} alt="" className="shadow" />
            <h3 className="fw-bold card-title">Edging</h3>
            <p className="card-text">
              Edging gives your lawn a clean, manicured look. Our experts create
              clear lines between your lawn and adjacent areas, enhancing the
              overall aesthetic of your outdoor space.
            </p>
          </article>
          <article className="card">
            <img src={fertilization} alt="" className="shadow" />
            <h3 className="fw-bold card-title">Fertilization</h3>
            <p className="card-text">
              Fertilizing is key to a lush, green lawn. We provide a balanced
              blend of nutrients tailored to your lawn's specific needs,
              promoting healthy growth and resilience.
            </p>
          </article>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials-section">
        <div className="testimonials-header">
          <h4 className="testimonials-subtitle fw-semibold">Testimonals</h4>
          <h2 className="testimonials-title fw-semibold">
            Voices of Satisfied Customers
          </h2>
        </div>
        <div className="testimonials-content">
          <article className="card">
            <p className="testimonials-text">
              Exceptional lawn care service! My yard has never looked better.
            </p>
            <h4 className="testimonials-name">- Joe G</h4>
          </article>
          <article className="card">
            <p className="testimonials-text">
              Top-notch service! They transformed my lawn beautifully.
            </p>
            <h4 className="testimonials-name">- Love Q</h4>
          </article>
          <article className="card">
            <p className="testimonials-text">
              Highly recommend! Their weed control is the best.
            </p>
            <h4 className="testimonials-name">- Guvienvere B</h4>
          </article>
        </div>
      </section>

      <section className="about-section" id="about-section">
        <img src={about} alt="" />
        <article className="about-content">
          <div className="about-header">
            <h4 className="about-subtitle">About Me</h4>
            <h1 className="about-title">Alex Madalinski</h1>
          </div>
          <div className="about-text">
            My name is Alex, and I'm dedicated to providing high-quality lawn
            care services to homeowners and businesses in Mount Prospect. With a
            passion for landscaping and a keen eye for detail, I founded Alex's
            Lawnscaping to help clients achieve beautiful and well-maintained
            outdoor spaces they can enjoy year-round. As a sole proprietor, I
            take pride in personally overseeing every aspect of your lawn care
            needs. I look forward to the opportunity to work with you and
            transform your outdoor space into a lush and inviting landscape
            you'll love. Contact me today to schedule a consultation, and let's
            bring your lawnscaping vision to life!
          </div>
        </article>
      </section>

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
              Our Lawn Care company is conveniently located at your service. You
              can find us on the map provided below. We are your local experts
              in Aeration, Edging, Fertilizing, Mowing, Trimming, and Weed
              Control. Don't hesitate to visit us for all your lawn care needs.
            </p>
          </div>
          <div></div>
        </div>
      </section>

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
    </main>
  );
};

export default Home;
