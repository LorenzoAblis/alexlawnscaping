import React from "react";

const Landing = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src="/lawn.webp"
        alt="lawn"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div
        className="relative z-20 flex flex-col items-left justify-center h-full text-text text-start w-90 p-7.5"
        style={{ textShadow: "0 0 1rem black" }}
      >
        <h1 className="text-3xl font-bold">
          Winter Cleanup & Landscaping Services in Mount Prospect, Illinois
        </h1>
        <p className="mt-6 text-text font-medium">
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
