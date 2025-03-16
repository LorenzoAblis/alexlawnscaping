const photoPairs = [
  {
    before: "backyardBefore",
    after: "backyardAfter",
  },
  {
    before: "bushBefore",
    after: "bushAfter",
  },
  {
    before: "parkingBefore",
    after: "parkingAfter",
  },
  {
    before: "sideBefore",
    after: "sideAfter",
  },
];

const collages = ["collage1", "collage2", "semiCollage", "mowing1", "mowing2"];

const BeforeAfter = () => {
  return (
    <section
      className="flex flex-col text-center mt-20 items-center"
      id="beforeAfter"
    >
      <div>
        <h4 className="text-2xl font-bold text-secondary">Our Work</h4>
        <h2 className="text-3xl mt-5 font-bold text-primary">Lawn Cleanups</h2>
      </div>
      <div className="mt-5 flex flex-row w-6/7 overflow-x-scroll snap-x snap-mandatory gap-5 text-center h-80 pr-5 md:h-full md:gap-10 pb-5 lg:overflow-x-visible lg:flex-wrap">
        {collages.map((collage) => (
          <img
            src={`/beforeAfter/${collage}.webp`}
            alt={collage}
            className="object-cover w-6/7 rounded-4xl m-auto shadow-[0.5rem_0.5rem_0rem_var(--color-secondary)] snap-center md:w-1/2 lg:w-1/4"
            loading="lazy"
          />
        ))}
      </div>
      <div className="mt-10">
        <h4 className="text-2xl font-bold text-secondary">Our Work</h4>
        <h2 className="text-3xl mt-5 font-bold text-primary">Before & After</h2>
      </div>
      <div className="flex flex-col items-center lg:w-full">
        {photoPairs.map((pair, index) => (
          <div
            className="mt-5 flex flex-row w-6/7 overflow-x-scroll snap-x snap-mandatory gap-5 text-center h-80 pr-5 nth-4:h-full pb-5 md:nth-4:h-100 lg:overflow-x-visible"
            key={index}
          >
            <img
              src={`/beforeAfter/${pair.before}.webp`}
              alt={pair.before}
              className="object-cover w-6/7 rounded-4xl m-auto shadow-[0.5rem_0.5rem_0rem_var(--color-secondary)] snap-center h-7/8 lg:w-1/3"
              loading="lazy"
            />
            <img
              src={`/beforeAfter/${pair.after}.webp`}
              alt={pair.after}
              className="object-cover w-6/7 rounded-4xl m-auto shadow-[0.5rem_0.5rem_0rem_var(--color-secondary)] snap-center h-7/8 lg:w-1/3"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfter;
