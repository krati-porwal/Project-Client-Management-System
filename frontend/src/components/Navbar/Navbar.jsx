const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100">
      <div className="container-fluid px-5">

        {/* LOGO */}
        <a className="navbar-brand fw-bold" href="#">
          Real Trust
        </a>

        {/* TOGGLE BUTTON (MOBILE) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          {/* BUTTON */}
          <button className="btn btn-warning px-4">
            Get Quote
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
