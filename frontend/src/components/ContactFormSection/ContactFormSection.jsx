import { useState } from "react";
import { submitContact } from "../../services/api";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <section className="container-fluid py-5">
      {/* TITLE */}
      <div className="row mx-0 mb-4">
        <div className="col text-center">
          <h2 className="fw-bold">Contact Us</h2>
        </div>
      </div>

      {/* FORM */}
      <div className="row mx-0 justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="full_name"
                className="form-control"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                name="mobile_number"
                className="form-control"
                value={formData.mobile_number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
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