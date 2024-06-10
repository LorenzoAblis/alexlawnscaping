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
      <div className="services-header">
        <h1 className="fw-bold services-title">Our Services</h1>
        <h5 className="services-subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          officiis aperiam error illum sit eligendi, commodi tenetur ipsa
          inventore delectus asperiores tempore molestiae porro, debitis
          dignissimos quia odit eos fugit velit rerum repellat amet. Nam aliquam
          aut soluta, architecto inventore reiciendis non sed ab, animi
          consectetur odit hic! Beatae, consequatur.
        </h5>
      </div>
      <div className="services-content">
        <ServicesCard
          img="mowing"
          title="Mowing / Edging"
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          officiis aperiam error illum sit eligendi, commodi tenetur ipsa
          inventore delectus asperiores tempore molestiae porro, debitis
          dignissimos quia odit eos fugit velit rerum repellat amet."
        />
        <ServicesCard
          img="weeding"
          title="Weeding"
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          officiis aperiam error illum sit eligendi, commodi tenetur ipsa
          inventore delectus asperiores tempore molestiae porro, debitis
          dignissimos quia odit eos fugit velit rerum repellat amet."
        />
        <ServicesCard
          img="hedge"
          title="Hedge Trimming"
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          officiis aperiam error illum sit eligendi, commodi tenetur ipsa
          inventore delectus asperiores tempore molestiae porro, debitis
          dignissimos quia odit eos fugit velit rerum repellat amet."
        />
        <ServicesCard
          img="springFall"
          title="Spring / Fall Cleanup"
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          officiis aperiam error illum sit eligendi, commodi tenetur ipsa
          inventore delectus asperiores tempore molestiae porro, debitis
          dignissimos quia odit eos fugit velit rerum repellat amet."
        />
      </div>
    </section>
  );
};

export default Services;
