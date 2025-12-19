import { useState } from "react";
import { subscribeEmail } from "../../services/api";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await subscribeEmail(email);
      setMessage(response.message);
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <footer className="container-fluid py-5 bg-dark text-light">
      {/* TITLE */}
      <div className="row mx-0 mb-4">
        <div className="col text-center">
          <h4 className="fw-bold">Subscribe to our Newsletter</h4>
          <p className="text-muted">
            Get updates about our latest projects
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="row mx-0 justify-content-center">
        <div className="col-md-5">
          <form
            onSubmit={handleSubmit}
            className="d-flex gap-2 justify-content-center"
          >
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>

          {message && (
            <p className="text-center mt-3 text-success">{message}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default NewsletterSection;
