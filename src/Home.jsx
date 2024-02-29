import React from "react";
import logo from "./assets/logo.png";
import "./Home.scss";

const Home = () => {
  return (
    <main className="shadow">
      <nav className="d-flex justify-content-between p-3 shadow">
        <img src={logo} alt="logo" />
        <div className="d-flex gap-4">
          <button>Home</button>
          <button>About</button>
          <button>Pricing</button>
          <span className="vertical-line"></span>
          <button className="contact">+1 312-444-1423</button>
          <p>ADD Bootrstrap icon and the phone icon</p>
        </div>
      </nav>
    </main>
  );
};

export default Home;
