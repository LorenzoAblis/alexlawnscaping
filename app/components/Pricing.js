import "../styles/Pricing.scss";

const Pricing = () => {
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

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2>❄️ &nbsp; Our Services &nbsp; ❄️</h2>
        <h5>
          {/* We provide many services to ensure your spaces get the proper care and
          attention. */}
          Keep your outdoor spaces looking their best with MP Green Teens! We
          offer seasonal cleanups, leaf removal, lawn aeration, pruning, and
          mulching to prepare your yard for the colder months ahead. Let us
          handle the hard work so you can enjoy a tidy, well-maintained
          landscape all season long. Contact us today to schedule your fall
          services now!
        </h5>
      </div>

      <h2>Pricing</h2>
      <div className="pricing-content">
        {prices.map((price, index) => (
          <div className="pricing-card" key={index}>
            <h3>{price.title}</h3>
            <p>{price.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
