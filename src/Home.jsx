import React from "react";
import logo from "./assets/logo.png";
import lawn from "./assets/lawn.jpg";
import passion from "./assets/passion.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <main className="shadow">
      <nav className="d-flex justify-content-between p-3 shadow">
        <img src={logo} alt="logo" />
        <div className="d-flex gap-5">
          <button>About</button>
          <button>Pricing</button>
          <button>FAQ</button>
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
        <img src={passion} alt="" />

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
