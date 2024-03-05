import React from "react";
import logo from "../assets/logo.png";
import lawn from "../assets/lawn.jpg";
import benefits from "../assets/benefits.jpg";
import passion from "../assets/passion.jpg";
import mowing from "../assets/mowing.jpg";
import edging from "../assets/edging.png";
import fertilization from "../assets/fertilization.jpg";
import alex from "../assets/alex.jpg";
import fiveStars from "../assets/fiveStars.png";
import "../styles/Home.scss";

const Home = () => {
  return (
    <main>
      <section className="slogan-section">
        <div className="slogan-text">
          <h1>Transforming lawns into stunning outdoor spaces</h1>
          <p>
            Welcome to Alex Lawnscaping, where I specialize in creating
            beautiful and functional outdoor environments. With my expertise and
            top-notch services, I'll turn your lawn into a masterpiece.
          </p>
          <div>
            <a href="#passion-section">Learn More</a>
          </div>
        </div>
        <img src={lawn} alt="lawn" className="shadow-lg" />
      </section>

      <section className="benefits-section">
        <img src={benefits} alt="" className="shadow" />
        <div className="benefits-text">
          <section className="benefits-header">
            <h2>
              Enhance Your Outdoor Space with Professional Lawnscaping Services
            </h2>
            <p>
              Transform your lawn into a beautiful and inviting oasis with my
              professional lawnscaping services. I will ensure that your outdoor
              space is well-maintained, vibrant, and visually appealing.
            </p>
          </section>
          <section className="benefits-cards">
            <div className="benefits-card">
              <h3>Increase Curb Appeal</h3>
              <p>
                My lawnscaping services will significantly enhance the curb
                appeal of your property.
              </p>
            </div>
            <div className="benefits-card">
              <h3>Boost Property Value</h3>
              <p>
                Investing in professional lawnscaping can increase the value of
                your property.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="passion-section">
        <img src={passion} alt="" className="shadow-lg" />

        <section className="passion-content d-flex" id="passion-section">
          <div className="vertical" />
          <article className="passion-article">
            <h1 className="fw-bold passion-title">Mowing with Passion</h1>
            <p>
              Mowing lawns isn't just a job for me — it's my passion. Every
              morning, as the sun rises, I step onto the lush green canvas of
              your lawn with a sense of purpose and excitement. Each blade of
              grass I trim isn't just a chore; it's an opportunity to create
              something beautiful.
              <br />
              <br />
              My dedication to mowing isn't just about making your lawn look
              neat and tidy; it's about transforming it into a work of art, a
              living masterpiece that reflects the care and attention to detail.
              <br />
              <br />
              So let's embark on this journey together, turning your lawn into a
              breathtaking oasis of greenery and tranquility!
            </p>
          </article>
        </section>
      </section>

      <section className="services-section" id="services-section">
        <div className="services-header">
          <h1 className="fw-bold services-title">My Services</h1>
          <h5 className="services-subtitle">
            I provide a comprehensive range of services in the lawnscaping
            industry, ensuring your lawn stays healthy and beautiful all year
            round.
          </h5>
        </div>
        <div className="services-content">
          <article className="card">
            <img src={mowing} alt="" className="shadow" />
            <h3 className="fw-bold card-title">Mowing</h3>
            <p className="card-text">
              My mowing service ensures your lawn can breathe, promoting root
              growth and improving water and nutrient absorption. Let me help
              your lawn thrive with my profession
            </p>
          </article>
          <article className="card">
            <img src={edging} alt="" className="shadow" />
            <h3 className="fw-bold card-title">Edging</h3>
            <p className="card-text">
              Edging gives your lawn a clean, manicured look. My expertise
              creates clear lines between your lawn and adjacent areas,
              enhancing the overall aesthetic of your outdoor space.
            </p>
          </article>
          <article className="card">
            <img src={fertilization} alt="" className="shadow" />
            <h3 className="fw-bold card-title">Fertilization</h3>
            <p className="card-text">
              Fertilizing is key to a lush, green lawn. I provide a balanced
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
          <article className="card">
            <p className="testimonials-text">
              I recently hired Alex Lawnscaping to take care of my lawn, and I'm
              amazed at the difference it's made! Their professional team not
              only delivered exceptional results but also provided valuable tips
              to maintain the beauty of my lawn year-round. I highly recommend
              their services!
            </p>
            <h4 className="testimonials-name">- Bobby G</h4>
          </article>
          <article className="card">
            <p className="testimonials-text">
              I've been using Alex Lawnscaping for years now, and I couldn't be
              happier with the results! Their attention to detail and commitment
              to keeping my lawn lush and vibrant have truly transformed my
              outdoor space.
            </p>
            <h4 className="testimonials-name">- Chase Bank</h4>
          </article>
          <article className="card">
            <p className="testimonials-text">Their edging job was the best!</p>
            <h4 className="testimonials-name">- Enzo Ablis</h4>
          </article>
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
          <article className="card">
            <p className="testimonials-text">
              I recently hired Alex Lawnscaping to take care of my lawn, and I'm
              amazed at the difference it's made! Their professional team not
              only delivered exceptional results but also provided valuable tips
              to maintain the beauty of my lawn year-round. I highly recommend
              their services!
            </p>
            <h4 className="testimonials-name">- Bobby G</h4>
          </article>
          <article className="card">
            <p className="testimonials-text">
              I've been using Alex Lawnscaping for years now, and I couldn't be
              happier with the results! Their attention to detail and commitment
              to keeping my lawn lush and vibrant have truly transformed my
              outdoor space.
            </p>
            <h4 className="testimonials-name">- Chase Bank</h4>
          </article>
          <article className="card">
            <p className="testimonials-text">Their edging job was the best!</p>
            <h4 className="testimonials-name">- Enzo Ablis</h4>
          </article>
        </div>
      </section>

      <section className="about-section" id="about-section">
        <img src={alex} alt="" />
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
              My lawnscaping company is conveniently located at your service.
              You can find me on the map provided below. I am your local expert
              in Aeration, Edging, Fertilizing, Mowing, Trimming, and Weed
              Control. Don't hesitate to visit me for all your lawn care needs.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
