import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    offcanvas.classList.remove('show');

    document.getElementsByClassName("offcanvas-backdrop")[0].classList.remove('show');
  };

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
                <Link className="nav-link active" to="/" onClick={closeOffcanvas}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/profile" onClick={closeOffcanvas}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/calorie" onClick={closeOffcanvas}>
                  Calorie Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/bulking" onClick={closeOffcanvas}>
                  Bulking Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/reference" onClick={closeOffcanvas}>
                  Reference
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/links" onClick={closeOffcanvas}>
                  Links
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
