import PropTypes from "prop-types";

import Image from "next/image";
import "../styles/Services.scss";

const ServicesCard = ({ img, title, subtitle }) => {
  return (
    <article className="card">
      <h3 className="fw-bold card-title">{title}</h3>
      <Image
        src={`/${img}.webp`}
        alt={img}
        width={1000}
        height={1000}
        objectFit="cover"
        className="next-img"
      />
      <p className="card-text">{subtitle}</p>
    </article>
  );
};

ServicesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h5>
        In addition, we offer discounts on pre-paid biweekly lawn mowing
        services listed below.
      </h5>
      <div className="services-content">
        <ServicesCard
          img="mowing"
          title="Mowing / Edging"
          subtitle="We take pride in providing top-notch lawn mowing services. With
          attention to detail and a commitment to excellence, we'll ensure your
          lawn stays perfectly manicured and healthy. We will mow your lawn to
          your prefered length, edge and trim it, and we will even haul away the
          clippings if that is your preference. We can also bag it and leave it
          by your curb, or if the clippings are minimal, we can leave the
          clippings on your grass to promote better growth, as the grass
          clippings are a good source of nutrients."
        />
        <ServicesCard
          img="weeding"
          title="Weeding"
          subtitle="We excel in ensuring your garden remains pristine and free of unwanted
          growth. We tackle even the toughest weeds, allowing your plants to
          thrive and your garden to look its best all season long."
        />
        <ServicesCard
          img="hedge"
          title="Hedge Trimming"
          subtitle="We ensure your hedges are healthy, well-maintained, and beautifully
          manicured, providing a clean and pristine look to your outdoors."
        />
        <ServicesCard
          img="springFall"
          title="Spring / Fall Cleanup"
          subtitle="Our dedicated team offers comprehensive fall and spring cleanup
          services to keep your yard looking its best year-round. We'll handle
          the removal of leaves, debris, and any seasonal clutter, making sure
          your yard is clean, healthy, and ready for the changing seasons."
        />
      </div>
    </section>
  );
};

export default Services;
