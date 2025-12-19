import { useEffect, useState } from "react";
import { fetchClients } from "../../services/api";
import "./ClientSection.css";

const ClientSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients()
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="client-section py-5 text-white">
      {/* TITLE */}
      <div className="row mx-0 mb-5">
        <div className="col text-center">
          <p className="text-warning mb-2">Testimonials</p>
          <h2 className="fw-bold mb-3">Happy Clients</h2>
          <p className="text-muted">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>
      </div>

      {/* CLIENTS GRID */}
      <div className="row mx-0 g-4 justify-content-center px-4">
        {clients.length === 0 ? (
          <div className="col text-center">
            <p>No clients found</p>
          </div>
        ) : (
          clients.map((client, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="testimonial-card h-100">
                <p className="testimonial-text">
                  “{client.description}”
                </p>

                <div className="d-flex align-items-center mt-4">
                  {client.image && (
                    <img
                      src={`http://127.0.0.1:8000${client.image}`}
                      alt={client.name}
                      className="testimonial-img"
                    />
                  )}

                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold">{client.name}</h6>
                    <small className="text-muted">
                      {client.designation}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ClientSection;