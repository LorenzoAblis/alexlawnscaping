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
        <h1>🎃&nbsp; Our Services &nbsp;🎃</h1>
        <h5>
          {/* We provide many services to ensure your spaces get the proper care and
          attention. */}
          Spooky season is here, and it's time to give your yard a fall
          makeover! From pumpkin-filled patches to haunted yardscapes, let us
          help transform your outdoor space into an autumn masterpiece. Get
          ready for a season full of vibrant leaves 🍂, spooky accents 💀, and
          cozy lawnscapes 🥧!
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
