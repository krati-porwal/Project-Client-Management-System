import "./About.css";

const AboutSection = () => {
  return (
    <section className="about-section text-white py-5">
      <div className="row mx-0 align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 px-5 mb-4 mb-lg-0">
          <h6 className="text-warning mb-3">Why Choose Us?</h6>

          <h2 className="display-6 fw-bold mb-3">About Us</h2>

          <div className="about-line mb-4"></div>

          <p>
            With over 15 years of experience in the luxury real estate market,
            we've helped hundreds of clients find their dream homes and achieve
            the best possible prices for their properties.
          </p>

          <p>
            Our team combines deep market knowledge with innovative marketing
            strategies to ensure your property stands out in today's competitive
            market.
          </p>

          <ul className="list-unstyled mt-4">
            <li className="mb-2">✔ Personalized service tailored to your needs</li>
            <li className="mb-2">✔ Comprehensive market analysis</li>
            <li className="mb-2">✔ Professional staging and photography</li>
            <li className="mb-2">✔ Wide network of qualified buyers</li>
          </ul>
        </div>

        {/* RIGHT CARDS */}
        <div className="col-lg-6 px-5">
          <div className="feature-card mb-4">
            <h5>Award Winning</h5>
            <p>Recognized as the top real estate agency in the region.</p>
          </div>

          <div className="feature-card mb-4">
            <h5>Expert Team</h5>
            <p>Dedicated professionals with years of experience.</p>
          </div>

          <div className="feature-card">
            <h5>Premium Properties</h5>
            <p>Access to exclusive luxury listings.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
