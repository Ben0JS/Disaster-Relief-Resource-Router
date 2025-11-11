import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark">About Disaster Relief Resource Finder</h1>
        <p className="lead text-muted about m-3 p-4 border border-dark rounded">
          The Disaster Relief Resource Finder is a community-driven platform built to connect
          individuals and organizations with essential resources during times of crisis.
        </p>
      </div>

      <section className="mb-5">
        <h3 className="fw-bold text-dark m-3">Our Mission</h3>
        <div className=" about m-3 p-4 border border-dark rounded">
        <p>
          Our project aims to:
        </p>
        <ul>
          <li>Bridge the gap between those in urgent need and available support resources.</li>
          <li>Empower communities by allowing users to add, share, and update local relief listings in real-time.</li>
          <li>Ensure speed and transparency in resource discovery and allocation during disasters.</li>
        </ul>
        </div>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold text-dark m-3">What We Offer</h3>
        <ul className="about m-3 p-4 border border-dark rounded list-unstyled">
          <li>
            <strong>Resource Listings:</strong> Get quick access to vital resources like shelters, medical aid,
            food distribution points, rescue contacts, and more.
          </li>
          <li>
            <strong>Location-Based Search:</strong> Find the closest help available using our search and map features,
            powered by real-time geolocation.
          </li>
          <li>
            <strong>Community Contributions:</strong> Anyone can add or update resource information,
            helping the platform stay current and relevant when seconds matter.
          </li>
          <li>
            <strong>Simple, Accessible Design:</strong> The platform features a clean, mobile-friendly interface—
            built with accessibility and ease-of-use in mind—even in stressful, low-connectivity environments.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold text-dark m-3">Why This Matters</h3>
        <p className="about m-3 p-4 border border-dark rounded">
          Natural disasters, emergencies, and crises disrupt lives. Getting accurate, up-to-date resource
          information can save lives and speed recovery. By bringing communities, NGOs, and local partners
          onto one open platform, we hope to make coordination easier and disaster response more effective
          for everyone.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="fw-bold text-dark m-3">Built With</h3>
        <ul className="about m-3 p-4 border border-dark rounded list-unstyled">
          <li>Modern web technologies (React, Node.js)</li>
          <li>Open data standards and APIs</li>
          <li>Secure, privacy-conscious design principles</li>
        </ul>
      </section>

      <section className="text-center">
        <h3 className="fw-bold text-dark m-3">Get Involved</h3>
        <p className="about m-3 p-4 border border-dark rounded">
          We encourage local contributors, NGOs, relief workers, and developers to help us grow and improve
          the Disaster Relief Resource Finder. Reach out via our contact form or contribute to our project
          on <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
