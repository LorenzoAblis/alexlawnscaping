import React from "react";
import homeImage from "./assets/home.png";
import "./Home.scss";

const Home = () => {
  return (
    <main className="shadow">
      <nav className="d-flex justify-content-between p-4 shadow">
        <h2 className="fw-bold">Alex's Lawn Care</h2>
        <div className="d-flex gap-4">
          <button>Home</button>
          <button>About</button>
          <button>Pricing</button>
        </div>
      </nav>
    </main>
  );
};

export default Home;
