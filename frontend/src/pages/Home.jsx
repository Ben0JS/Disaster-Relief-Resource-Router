import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import disaster from "../assets/disaster.avif";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-light d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${disaster}) center/cover no-repeat`,
          height: "50vh",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Disaster Relief Resource Finder
          </h1>
          <p className="lead mb-4">
            A community-driven platform connecting individuals and organizations
            with essential resources during times of crisis.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/register" className="btn login-btn text-white fw-bold btn-lg px-4">
              Register
            </Link>
            <Link to="/login" className="btn btn-outline-light fw-bold btn-lg px-4">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 hometxt">Our Mission</h2>
          <p className="text-muted mb-4">
            We aim to bridge the gap between people in urgent need and the
            resources available during disasters. Together, we make disaster
            response faster, transparent, and more accessible.
          </p>
          <Link to="/about" className="btn btn-outline-primary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5 hometxt">
            What We Offer
          </h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center about">
                  <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Location-Based Search</h5>
                  <p className="text-muted">
                    Find the closest relief centers, shelters, and medical
                    facilities instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center about">
                  <i className="bi bi-people fs-1 text-success mb-3"></i>
                  <h5 className="card-title fw-bold">Community Driven</h5>
                  <p className="text-muted">
                    Anyone can add or update relief resources, keeping
                    information up to date.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center about">
                  <i className="bi bi-lightning fs-1 text-warning mb-3"></i>
                  <h5 className="card-title fw-bold">Quick Access</h5>
                  <p className="text-muted">
                    Access vital information like shelters, food, and rescue
                    contacts in seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center about">
                  <i className="bi bi-phone fs-1 text-danger mb-3"></i>
                  <h5 className="card-title fw-bold">Mobile Friendly</h5>
                  <p className="text-muted">
                    Designed for accessibility and usability, even in
                    low-connectivity situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-3 px-3 mb-4 text-center text-dark">
        <div className="container ">
          <h2 className="fw-bold mb-3 hometxt">Get Involved</h2>
          <p className="mb-4">
            Join hands with us to improve and expand this life-saving platform.
            Whether you're a volunteer, NGO, or developer — your contribution
            matters.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
