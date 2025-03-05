const Founder = () => {
  return (
    <section className="text-center mt-15 " id="founder">
      <div className="founder-header">
        <h4 className="text-2xl font-bold">🌼 &nbsp; The Founder &nbsp; 🌼</h4>
        <h2 className="text-4xl font-bold text-accent mt-3">Alex Madalinski</h2>
      </div>
      <article className="mt-10 flex flex-col items-center">
        <img
          src="/alex.webp"
          alt="founder"
          className="object-cover w-80 rounded-4xl shadow-[1rem_1rem_0rem_var(--color-secondary)]"
        />
        <div className="mt-15 w-80 font-medium">
          I'm Alex, the founder of MP Green Teens, a dynamic high school run
          landscaping business. Combining a passion for nature, 3 years of
          landscaping experience, and hard work with entrepreneurial spirit,
          I've cultivated a dedicated team of young landscapers committed to
          transforming local lawns and gardens in the bright community of Mount
          Prospect. M.P. Green Teens is redefining landscaping services with
          fresh ideas, youthful energy, and a commitment to excellence.
        </div>
      </article>
    </section>
  );
};

export default Founder;
