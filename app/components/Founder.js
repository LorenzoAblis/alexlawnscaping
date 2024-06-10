// import alex from "../assets/alex.jpg";
import "../styles/Founder.scss";
import Image from "next/image";

const Founder = () => {
  return (
    <section className="founder-section" id="founder">
      <div className="founder-header">
        <h4 className="founder-subtitle">🌿 &nbsp; Our Founder &nbsp; 🌿 </h4>
        <h1 className="founder-title">Alex Madalinski</h1>
      </div>
      <article className="founder-content">
        <Image
          src="/alex.webp"
          alt="founder"
          width={1000}
          height={1000}
          objectFit="cover"
          className="next-img"
        />
        <div className="founder-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          sit exercitationem, numquam quasi aspernatur cum sequi possimus
          deleniti repudiandae aliquid, quidem explicabo nihil. Blanditiis
          dolorum aspernatur dolores aliquid veniam architecto, tempora aut ad
          adipisci alias odio, ea corporis explicabo minima? Ipsa explicabo quae
          eum, dolor nihil reprehenderit dicta ad repudiandae fuga natus, ex
          dolorem soluta pariatur inventore, tempore neque aliquam magnam?
          Recusandae ratione iusto possimus in magnam id molestias illo saepe
          aliquam, fuga, laudantium error.
        </div>
      </article>
    </section>
  );
};

export default Founder;
