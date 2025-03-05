const About = () => {
  return (
    <section className="mt-20 bg-primary p-5 py-15" id="about">
      <img
        src="/team.webp"
        alt="team"
        className="rounded-4xl shadow-[0_0_1rem_rgba(255,255,255,0.5)] h-70 object-cover"
      />

      <article className="text-center mt-10">
        <h2 className="font-semibold text-3xl text-text">About The Team!</h2>
        <div className="mt-5 font-medium">
          M.P. Green Teens is a team of passionate high school students
          dedicated to transforming your outdoor spaces. Every member is a young
          and hard-working entrepreneur who comes from Prospect High School. We
          bring fresh prospectives and youthful energy to the neighborhood
          providing fall cleanup & landscaping to Mount Prospect, Illinois.
          Top-notch care is ensured on every project to make sure we satisfy
          your needs. From gardening to mowing lawns, we got you covered.
        </div>
      </article>
    </section>
  );
};

export default About;
