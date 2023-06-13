import "../index.css";
import Header from "../composants/Header";
import Navbar from "../composants/Navbar";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to server or API endpoint
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Email sent successfully
        console.log("Email sent successfully.");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Error sending email
        console.error("Error sending email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Header />

      <div className="Workspace">
        <Navbar />

        <div className="Page">
          <h1>Soon...</h1>
          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <br />
            <button type="submit">Submit</button>
          </form> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
