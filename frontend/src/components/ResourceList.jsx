import React from "react";
import { Link } from "react-router-dom";

const ResourceList = ({ resources }) => {
  return (
    <div>
      <h3 className="mb-4 text-center pt-5 fnt ">Available Resources</h3>
      {resources.length === 0 && <p>No resources found.</p>}
      {resources.map((r) => (
        <div key={r._id} className="card mb-3 shadow-sm">
          <div className="card-body resourcelist fw-bold">
            <p><strong>Type:</strong> {r.type}</p>
            <p><strong>Description:</strong> {r.description}</p>
            <p><strong>Location:</strong> {r.location}</p>
            <p><strong>Contact:</strong> {r.contact}</p>
            <Link to={`/resources/${r._id}`}>
              <button className="btn login-btn text-white fw-bold mt-3">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
