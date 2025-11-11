import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({ resource, onDelete, showDelete }) => {
  return (
    <div className="card mb-3 shadow-sm rounded fnt ">
      <div className="card-body resourcelist fw-bold">
        <p><strong>Type:</strong> {resource.type}</p>
        <p><strong>Description:</strong> {resource.description}</p>
        <p><strong>Location:</strong> {resource.location}</p>
        <p><strong>Contact:</strong> {resource.contact}</p>
        <p><strong>Posted by:</strong> {resource.user.name}</p>
        <Link to={`/resources/${resource._id}`}>
          <button className="btn login-btn text-white fw-bold me-2">View Details</button>
        </Link>
        {showDelete && (
          <button
            onClick={() => onDelete(resource._id)}
            className="btn delete text-white fw-bold"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
