import { useEffect, useState } from "react";
import { db } from "/firebaseConfig";
import { ref, onValue } from "firebase/database";

const TestimonialsCard = ({ name, content }) => {
  return (
    <article className="min-w-80 bg-gray-100 rounded-3xl snap-center p-5 text-start py-10 h-fit">
      <p className="testimonials-text">{content}</p>
      <h4 className="mt-5 font-bold">- {name}</h4>
    </article>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchFeedback = () => {
    const itemsRef = ref(db, "feedback");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newItems = Object.values(data).filter((item) => item.approved);
        setTestimonials(newItems);
      }
    });
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <section className="flex flex-col text-center mt-20 items-center">
      <div>
        <h4 className="text-2xl font-bold text-secondary">Testimonials</h4>
        <h2 className="text-3xl mt-5 font-bold text-primary">
          Voices of Satisfied Customers
        </h2>
      </div>
      <div className="mt-10 flex flex-row w-85 overflow-x-scroll snap-x snap-mandatory space-x-2 text-center">
        {testimonials.map(
          (testimonial, index) =>
            testimonial.approved && (
              <TestimonialsCard
                name={testimonial.name}
                content={testimonial.msg}
                key={index}
              />
            )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
