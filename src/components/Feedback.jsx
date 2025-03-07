import { useState } from "react";
import toast from "react-hot-toast";
import { db } from "/firebaseConfig";
import { ref, set } from "firebase/database";

const Feedback = () => {
  const [feedbackMsg, setFeedbackMsg] = useState({
    name: "",
    msg: "",
    approved: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("feedback test");

    if (feedbackMsg.name) {
      const sanitizedName = feedbackMsg.name.replace(/[./]/g, "a");

      try {
        await set(ref(db, "feedback/" + sanitizedName), {
          name: feedbackMsg.name,
          msg: feedbackMsg.msg,
          approved: false,
        });

        setFeedbackMsg({
          name: "",
          msg: "",
          approved: false,
        });

        toast.success(
          "Thank you for your feedback! We hope to work with you again!"
        );
      } catch (error) {
        console.error("Error submitting feedback: ", error);
        toast.error(
          `Failed to submit feedback. Please try again. \n\n${error}`
        );
      }
    } else {
      toast.error("Please enter your name.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFeedbackMsg((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <section className="flex flex-col items-center mt-15">
      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold text-secondary">Feedback</h4>
        <h2 className="text-3xl font-bold text-primary mt-3">
          Help us Improve
        </h2>
      </div>
      <form className="w-7/8 mt-5 md:w-3/5" onSubmit={handleSubmit}>
        <h3 className="mb-3 text-lg font-semibold text-gray-500">Your name</h3>
        <input
          type="text"
          name="name"
          className="border-1 rounded-lg border-gray-400 w-full p-1"
          value={feedbackMsg.name}
          onChange={handleChange}
        />
        <h3 className="mb-3 text-lg font-semibold mt-5 text-gray-500">
          Feedback / Opinions
        </h3>
        <textarea
          id="feedback"
          name="msg"
          className="border-1 rounded-lg border-gray-400 w-full p-10"
          value={feedbackMsg.msg}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full rounded-2xl bg-accent p-3 mt-3 text-text font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Feedback;
