import { useState } from "react";
import { submitContact } from "../../services/api";
import "./ContactFormSection.css";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContact(formData);
      setMessage(response.message || "Submitted successfully");
      setFormData({
        full_name: "",
        email: "",
        mobile_number: "",
        city: "",
      });
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <section className="contact-section py-5 text-white">
      <div className="row mx-0 align-items-center px-4">

        {/* LEFT INFO */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <p className="text-warning mb-2">Get in Touch</p>
          <h2 className="fw-bold mb-3">Get a Free Consultation</h2>
          <p className="text-muted mb-4">
            Ready to find your dream home or sell your property for top dollar?
            Fill out the form and one of our expert agents will contact you
            within 24 hours.
          </p>

          <div className="contact-info">
            <p><strong>📞 Call Us</strong><br />+1 (555) 123-4567</p>
            <p><strong>✉️ Email Us</strong><br />info@realtrust.com</p>
            <p><strong>📍 Visit Us</strong><br />123 Luxury Lane, Manhattan, NY</p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="col-lg-5 offset-lg-1">
          <form onSubmit={handleSubmit} className="contact-form-card">
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-3">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>

            <div className="mb-4">
              <label>Area, City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Manhattan, New York"
                required
              />
            </div>

            <button type="submit" className="btn-gold w-100">
              Get Quick Quote ✈️
            </button>

            {message && (
              <p className="text-success text-center mt-3">{message}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;
