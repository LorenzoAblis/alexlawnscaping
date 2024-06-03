import Image from "next/image";
import "../styles/Passion.scss";

const Passion = () => {
  return (
    <section className="passion-section">
      <h1 className="fw-bold passion-title">Mowing with Passion</h1>

      <Image
        src="/passion.jpg"
        alt="passion"
        width={1000}
        height={1000}
        objectFit="cover"
        className="next-img"
      />
      <p>
        Mowing lawns isn't just a job for me — it's my passion. Every morning,
        as the sun rises, I step onto the lush green canvas of your lawn with a
        sense of purpose and excitement. Each blade of grass I trim isn't just a
        chore; it's an opportunity to create something beautiful.
        <br />
        <br />
        My dedication to mowing isn't just about making your lawn look neat and
        tidy; it's about transforming it into a work of art, a living
        masterpiece that reflects the care and attention to detail.
        <br />
        <br />
        So let's embark on this journey together, turning your lawn into a
        breathtaking oasis of greenery and tranquility!
      </p>
    </section>
  );
};

export default Passion;
