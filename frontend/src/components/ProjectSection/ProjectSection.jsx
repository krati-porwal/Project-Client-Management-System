import { useEffect, useState } from "react";
import { fetchProjects } from "../../services/api";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="project-section py-5 text-white">
      {/* TITLE */}
      <div className="row mx-0 mb-5">
        <div className="col text-center">
          <p className="text-warning mb-2">Our Portfolio</p>
          <h2 className="fw-bold mb-3">Our Projects</h2>
          <p className="text-muted">
            Explore our latest successful projects and see how we've helped
            our clients achieve their real estate goals.
          </p>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="row mx-0 g-4 justify-content-center px-4">
        {projects.length === 0 ? (
          <div className="col text-center">
            <p>No projects available</p>
          </div>
        ) : (
          projects.map((project) => (
            <div className="col-md-6 col-lg-3" key={project.id}>
              <div className="project-card h-100">
                {/* IMAGE */}
                {project.image && (
                  <div className="project-img-wrapper">
                    <img
                      src={`http://127.0.0.1:8000${project.image}`}
                      alt={project.name}
                      className="img-fluid"
                    />
                    <span className="project-badge">Featured</span>
                  </div>
                )}

                {/* CONTENT */}
                <div className="project-content p-3">
                  <small className="text-warning">
                    {project.client}
                  </small>

                  <h6 className="mt-2 fw-bold">{project.name}</h6>

                  <p className="small text-muted">
                    {project.description.substring(0, 80)}...
                  </p>

                  <span className="read-more">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="row mx-0 mt-5">
        <div className="col text-center">
          <button className="btn btn-outline-warning px-4">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;