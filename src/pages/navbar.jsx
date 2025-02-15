import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const handleCloseOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    const backdrop = document.querySelector(".offcanvas-backdrop");

    offcanvas?.classList.remove("show");
    backdrop?.classList.remove("show");
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/profile", label: "Profile" },
    { to: "/calorie", label: "Calorie Calculator" },
    { to: "/bulking", label: "Bulking Calculator" },
    { to: "/weekly", label: "Weekly Bulk" },
  ];

  return (
    <nav className="navbar sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">Bulk or Die 💪</span>

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
              {navLinks.map(({ to, label }) => (
                <li key={to} className="nav-item">
                  <Link
                    className="nav-link active"
                    to={to}
                    onClick={handleCloseOffcanvas}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
