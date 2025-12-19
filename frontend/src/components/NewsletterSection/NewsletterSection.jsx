import { useState } from "react";
import { subscribeEmail } from "../../services/api";
import "./NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await subscribeEmail(email);
      setMessage(response.message || "Subscribed successfully");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">

        <h2 className="newsletter-title">Subscribe Us</h2>

        <p className="newsletter-text">
          Subscribe to our newsletter and be the first to know about new
          listings, market updates, and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Subscribe ✈️
          </button>
        </form>

        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;