import { useEffect, useState } from "react";
import { fetchProjects } from "../../services/api"

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container-fluid py-5">
      {/* TITLE */}
      <div className="row mx-0 mb-4">
        <div className="col text-center">
          <h2 className="fw-bold">Our Projects</h2>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="row mx-0 g-4 justify-content-center">
        {projects.length === 0 ? (
          <div className="col text-center">
            <p>No projects available</p>
          </div>
        ) : (
          projects.map((project) => (
            <div className="col-md-4 col-lg-3" key={project.id}>
              <div className="card h-100 shadow-sm">
                {project.image && (
                  <img
                    src={`http://127.0.0.1:8000${project.image}`}
                    className="card-img-top"
                    alt={project.name}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>

                  <p className="mt-auto mb-2">
                    <strong>Client:</strong> {project.client}
                  </p>

                  <button className="btn btn-primary btn-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
