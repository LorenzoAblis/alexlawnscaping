"use client";

import "../styles/Navbar.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const routes = [
    { name: "Services", route: "services" },
    { name: "Testimonials", route: "testimonials" },
    { name: "About", route: "about" },
    { name: "Contact", route: "contact" },
  ];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scroll ? "sticky" : ""}`}>
      <Image
        src="/logoTransparent.png"
        alt="logo"
        className="next-img"
        width={500}
        height={100}
      />
      <ul className="nav-links">
        {routes.map((route) => (
          <li key={route.route}>
            <a href={`#${route.route}`}>{route.name}</a>
          </li>
        ))}
        {/* <li>
          <button className="contact">
            <i className="bi bi-telephone-fill mr-3"></i> 312-444-1423
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
