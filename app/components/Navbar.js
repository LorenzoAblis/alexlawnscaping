"use client";

import "../styles/Navbar.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const routes = [
    { name: "Home", route: "" },
    { name: "Services", route: "services" },
    { name: "Testimonials", route: "testimonials" },
    { name: "About", route: "about" },
    { name: "Founder", route: "founder" },
    { name: "Contact", route: "contact" },
  ];

  const [scroll, setScroll] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);

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
    <>
      <nav className={`${scroll ? "sticky" : ""}`}>
        <button onClick={() => setShowSidebar(true)}>
          <i class="bi bi-list"></i>
        </button>
        <Image
          src="/logo.webp"
          alt="logo"
          className="next-img"
          width={500}
          height={100}
        />

        <div className="link-container">
          {routes.map((route, index) => (
            <a href={`#${route.route}`} key={index}>
              {route.name}
            </a>
          ))}
          <a href="tel:224-522-4243">
            <i class="bi bi-telephone-fill"></i>
          </a>
        </div>

        <a href="tel:224-522-4243">
          <i class="bi bi-telephone-fill"></i>
        </a>
      </nav>
      <aside
        className={`sidebar ${showSidebar ? "show-sidebar" : "hide-sidebar"}`}
      >
        <button onClick={() => setShowSidebar(false)}>
          <i class="bi bi-list"></i>
        </button>
        <div className="link-container">
          {routes.map((route, index) => (
            <a href={`#${route.route}`} key={index}>
              {route.name}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
