import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import * as bootstrap from "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

const Navbar = () => {

    useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById("navbarNav");

    if (!menuToggle) return;

    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        bsCollapse.hide(); 
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {
          bsCollapse.hide();
        });
      });
    };
  }, []);


  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-primary navbg py-3 fnt ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Disaster Relief Resource Finder
        </Link>

        <button
          className="navbar-toggler bgclr border-2 border-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto custom-mobile-list mt-3 fw-bold text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/search">
                Search
              </Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                {role === "admin" && (
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/admin">
                      Admin
                    </Link>
                  </li>
                )}

                <li className="nav-item d-flex justify-content-center">
                  <button
                    onClick={handleLogout}
                    className=" bg-transparent nav-link text-white fw-bold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
