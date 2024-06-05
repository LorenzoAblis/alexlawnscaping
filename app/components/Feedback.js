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

  const handleSubmit = async () => {
    if (feedbackMsg.name) {
      await set(ref(db, "feedback/" + feedbackMsg.name), {
        name: feedbackMsg.name,
        msg: feedbackMsg.msg,
        approved: false,
      });
    }
    setFeedbackMsg({
      name: "",
      msg: "",
      approved: false,
    });
    toast.success(
      "Thank you for your feedback! We hope to work with you again!"
    );
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
      <div className="feedback-form">
        <h3>Your name</h3>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <h3>Feedback / Opinions</h3>
        <textarea
          type="text"
          id="feedback"
          name="msg"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
};

export default Feedback;
