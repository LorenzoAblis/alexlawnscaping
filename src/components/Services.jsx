const services = [
  {
    img: "mowing",
    title: "Mowing / Edging",
    subtitle: `We take pride in providing top-notch lawn mowing services. With
      attention to detail and a commitment to excellence, we'll ensure your
      lawn stays perfectly manicured and healthy. We will mow your lawn to
      your preferred length, edge and trim it, and we will even haul away the
      clippings if that is your preference. We can also bag it and leave it
      by your curb, or if the clippings are minimal, we can leave the
      clippings on your grass to promote better growth, as the grass
      clippings are a good source of nutrients.`,
  },
  {
    img: "weeding",
    title: "Weeding",
    subtitle: `We excel in ensuring your garden remains pristine and free of unwanted
      growth. We tackle even the toughest weeds, allowing your plants to
      thrive and your garden to look its best all season long.`,
  },
  {
    img: "hedge",
    title: "Hedge Trimming",
    subtitle: `We ensure your hedges are healthy, well-maintained, and beautifully
      manicured, providing a clean and pristine look to your outdoors.`,
  },
  {
    img: "springFall",
    title: "Spring / Fall Cleanup",
    subtitle: `Our dedicated team offers comprehensive fall and spring cleanup
      services to keep your yard looking its best year-round. We'll handle
      the removal of leaves, debris, and any seasonal clutter, making sure
      your yard is clean, healthy, and ready for the changing seasons.`,
  },
];

const ServicesCard = ({ img, title, subtitle, index }) => {
  const isEven = index % 2 === 0;

  return (
    <article className="flex flex-col items-center gap-6 md:flex-row md:gap-8 md:items-center">
      <div
        className={`flex flex-col items-center md:w-1/2 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={`/${img}.webp`}
          alt={img}
          className="w-7/8 rounded-3xl shadow-[0.5rem_0.5rem_0rem_var(--color-secondary)] md:object-cover md:h-100"
          loading="lazy"
        />
      </div>

      <div
        className={`w-7/8 text-center mt-5 md:w-1/2 md:text-left md:mt-0 ${
          isEven ? "md:order-2" : "md:order-1 md:pl-15"
        }`}
      >
        <h3 className="text-2xl font-bold text-accent mb-4">{title}</h3>
        <p className="md:w-7/8">{subtitle}</p>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section className="flex flex-col items-center md:mt-10" id="services">
      <h5 className="text-center text-xl font-medium w-7/8 md:font-bold">
        In addition, we offer discounts on pre-paid biweekly lawn mowing
        services listed below.
      </h5>
      <div className="flex flex-col mt-10 gap-10">
        {services.map((service, index) => (
          <ServicesCard key={service.img} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
