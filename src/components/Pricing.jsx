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
      <div className="flex flex-col w-85 items-center">
        <h2 className="text-3xl font-bold text-primary">
          🌸 &nbsp; Our Services &nbsp; 🌸
        </h2>
        <h5 className="text-center mt-5 font-medium">
          Keep your outdoor spaces looking their best with MP Green Teens! We
          offer seasonal cleanups, leaf removal, lawn aeration, pruning, and
          mulching to prepare your yard for the colder months ahead. Let us
          handle the hard work so you can enjoy a tidy, well-maintained
          landscape all season long. Contact us today to schedule your spring
          services now!
        </h5>
      </div>

      <h2 className="mt-10 text-2xl text-secondary font-bold">Pricing</h2>
      <div className="mt-5 flex flex-row w-85 overflow-x-scroll snap-x snap-mandatory space-x-2 text-center pb-10">
        {prices.map((price, index) => (
          <div
            className="min-w-80 bg-accent rounded-3xl snap-center p-5"
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
