import { useEffect, useState } from "react";
import { fetchClients } from "../../services/api";

const ClientSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients()
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container-fluid py-5 bg-light">
      {/* TITLE */}
      <div className="row mx-0 mb-4">
        <div className="col text-center">
          <h2 className="fw-bold">Happy Clients</h2>
        </div>
      </div>

      {/* CLIENTS GRID */}
      <div className="row mx-0 g-4 justify-content-center">
        {clients.length === 0 ? (
          <div className="col text-center">
            <p>No clients found</p>
          </div>
        ) : (
          clients.map((client, index) => (
            <div className="col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm text-center p-3">
                {client.image && (
                  <img
                    src={`http://127.0.0.1:8000${client.image}`}
                    alt={client.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <p className="fst-italic">"{client.description}"</p>

                <h5 className="fw-bold mt-3">{client.name}</h5>
                <p className="text-muted mb-0">{client.designation}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ClientSection;
