import React from "react";

const Landing = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src="/spring.webp"
        alt="lawn"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div
        className="relative z-20 flex flex-col items-left justify-center h-full text-text text-start w-full p-7.5 md:w-3/4 lg:w-8/12"
        style={{ textShadow: "0 0 1rem black" }}
      >
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Spring Cleanup & Landscaping Services in Mount Prospect, Illinois
        </h1>
        <p className="mt-6 text-text font-medium md:text-lg lg:text-xl">
          Welcome to M.P. Green Teens! Our mission is to transform your lawns
          and gardens into beautiful, vibrant spaces. Let us help you achieve
          your landscaping goals, enhancing both the beauty of your home and
          your enjoyment of the outdoors.
        </p>
        <div className="mt-15">
          <a
            href="#services"
            className="no-underline p-4 text-text text-lg font-medium border-4 border-accent transition-colors duration-350 hover:bg-accent"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
