import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="row mx-0 align-items-center min-vh-100 text-white">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 px-5">
          <h6 className="text-warning mb-3">Consultation, Design & Marketing</h6>

          <h1 className="display-4 fw-bold mb-4">
            Not Your Average Realtor
          </h1>

          <p className="mb-4">
            We help our clients get top dollar for the sale of their homes with
            our expert consultation, stunning design, and strategic marketing
            approach.
          </p>

          <div className="d-flex gap-3 mb-5">
            <button className="btn btn-warning px-4 py-2">
              Get Started →
            </button>

            <button className="btn btn-outline-light px-4 py-2">
              View Projects
            </button>
          </div>

          {/* STATS */}
          <div className="row mx-0 text-center">
            <div className="col-4">
              <h2 className="fw-bold">500+</h2>
              <p className="small">Properties Sold</p>
            </div>
            <div className="col-4">
              <h2 className="fw-bold">98%</h2>
              <p className="small">Client Satisfaction</p>
            </div>
            <div className="col-4">
              <h2 className="fw-bold">15+</h2>
              <p className="small">Years Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT EMPTY (IMAGE COMES FROM CSS) */}
        <div className="col-lg-6 d-none d-lg-block"></div>

      </div>
    </section>
  );
};

export default HeroSection;
