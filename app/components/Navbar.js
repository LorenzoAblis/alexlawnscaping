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
      <i class="bi bi-list"></i>
      <Image
        src="/logo.jpg"
        alt="logo"
        className="next-img"
        width={500}
        height={100}
      />

      <i class="bi bi-telephone-fill"></i>
    </nav>
  );
};

export default Navbar;
