"use client";

import "../styles/Feedback.scss";
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
        await set(ref(db, "test/" + sanitizedName), {
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
    <section className="feedback-section">
      <div className="feedback-header">
        <h2>Help us Improve</h2>
      </div>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h3>Your name</h3>
        <input
          type="text"
          id="name"
          name="name"
          value={feedbackMsg.name}
          onChange={handleChange}
        />
        <h3>Feedback / Opinions</h3>
        <textarea
          id="feedback"
          name="msg"
          value={feedbackMsg.msg}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Feedback;
