import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand"  href="/">
          Bulk or Die
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Bulk or Die Links
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/calorie">
                  Calorie Calculator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/bulking">
                  Bulking Calculator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/reference">
                  Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
