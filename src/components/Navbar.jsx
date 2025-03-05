import { useState, useEffect } from "react";

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
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          ${
            scroll
              ? "fixed bg-primary shadow-lg transition-all duration-1000"
              : "absolute bg-transparent transition-all duration-1000"
          }
          w-full top-0 left-0 flex items-center justify-between z-[1000]
        `}
      >
        <button
          onClick={() => setShowSidebar(true)}
          className={`${scroll ? "flex md:hidden" : "hidden"}`}
        >
          <i className="bi bi-list text-white text-2xl"></i>
        </button>

        <img
          src="/logo.webp"
          alt="logo"
          width={500}
          height={100}
          className={`
            ${
              scroll
                ? "transition-all duration-1000 w-[15vw]"
                : "mt-6 object-contain w-[20vw] ml-[7.5vw]"
            }
            drop-shadow-lg
          `}
        />

        <div
          className={`${
            scroll ? "hidden md:flex md:flex-row md:gap-6 md:mr-8" : "hidden"
          }`}
        >
          {routes.map((route, index) => (
            <a
              key={index}
              href={`#${route.route}`}
              className="flex items-center no-underline text-white font-medium text-[1.15vw] hover:text-accent"
            >
              {route.name}
            </a>
          ))}
          <a
            href="tel:224-522-4243"
            className="flex items-center no-underline text-white font-medium text-[1.15vw] hover:text-accent"
          >
            <i className="bi bi-telephone-fill text-2xl"></i>
          </a>
        </div>

        <a href="tel:224-522-4243" className="block md:hidden">
          <i className="bi bi-telephone-fill text-white text-2xl"></i>
        </a>
      </nav>

      <aside
        className={`
          fixed top-0 left-0 h-screen w-[50vw] bg-primary shadow-lg transition-opacity duration-500
          ${showSidebar ? "opacity-100 z-[5000]" : "opacity-0 z-[-5000]"}
        `}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="bg-transparent flex w-[10vw] ml-4 mt-6 border-none"
        >
          <i className="bi bi-list text-white text-2xl"></i>
        </button>
        <div className="flex flex-col ml-6 mt-10 gap-6">
          {routes.map((route, index) => (
            <a
              key={index}
              href={`#${route.route}`}
              className="no-underline text-white text-2xl font-medium"
            >
              {route.name}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
