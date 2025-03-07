const prices = [
  {
    title: "Grass cutting, trimming/edging",
    description:
      "Starts at $25 (prices vary depending on grass length and square footage)",
  },
  {
    title: "Weeding",
    description: "$15 per hour",
  },
  {
    title: "Hedge Trimming",
    description: "Starts at $10 depending on shrub/hedge size and height",
  },
  {
    title: "Spring/Fall Cleanup",
    description: "Starting at $50 depending on size and amount of debris",
  },
  {
    title: "Planting",
    description: "Starts at $15 per hour",
  },
  {
    title: "Mulching",
    description:
      "Prices vary depending on whether you are supplying your mulch for us to lay or if you prefer us to bring our own mulch to lay",
  },
];

const Pricing = () => {
  return (
    <section className="flex flex-col items-center mt-15">
      <div className="flex flex-col w-7/8 items-center md:w-5/8">
        <h2 className="text-2xl text-secondary font-bold">Pricing</h2>
        <h2 className="text-3xl font-bold text-primary">
          🌸 &nbsp; Our Services &nbsp; 🌸
        </h2>
        <h5 className="text-center mt-7 font-medium">
          Keep your outdoor spaces looking their best with MP Green Teens! We
          offer seasonal cleanups, leaf removal, lawn aeration, pruning, and
          mulching to prepare your yard for the colder months ahead. Let us
          handle the hard work so you can enjoy a tidy, well-maintained
          landscape all season long. Contact us today to schedule your spring
          services now!
        </h5>
      </div>

      <div className="mt-10 flex flex-row w-6/7 overflow-x-scroll snap-x snap-mandatory space-x-5 text-center pb-10 md:flex-wrap md:space-x-0 md:gap-10 md:justify-evenly">
        {prices.map((price, index) => (
          <div
            className="min-w-7/8 bg-accent rounded-3xl snap-center p-5 md:min-w-0 w-2/7 md:snap-none"
            key={index}
          >
            <h3 className="text-2xl text-text font-semibold">{price.title}</h3>
            <p className="mt-5 text-lg">{price.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
