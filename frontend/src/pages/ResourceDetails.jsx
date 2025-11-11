import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const ResourceDetails = () => {
  const { id } = useParams(); // get resource ID from URL
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await API.get("/resources"); // fetch all resources
        const found = res.data.find((r) => r._id === id); // find by id
        setResource(found);
      } catch (err) {
        alert("Failed to fetch resource details");
      }
    };
    fetchResource();
  }, [id]);

  if (!resource) return <p className="text-center my-4">Loading resource details...</p>;

  // Format posted date if available
  const formattedDate = resource.postedDate
    ? new Date(resource.postedDate).toLocaleDateString()
    : "N/A";

  return (
    <div className="container my-4 p-4 shadow-sm rounded bg-light fnt">
      <h2 className="mb-4 text-center">Resource Details</h2>
      <div className="row mb-2">
        <div className="col-md-3 fw-bold">Type:</div>
        <div className="col-md-9">{resource.type}</div>
      </div>
      <div className="row mb-2">
        <div className="col-md-3 fw-bold">Description:</div>
        <div className="col-md-9">{resource.description}</div>
      </div>
      <div className="row mb-2">
        <div className="col-md-3 fw-bold">Location:</div>
        <div className="col-md-9">{resource.location}</div>
      </div>
      <div className="row mb-2">
        <div className="col-md-3 fw-bold">Contact:</div>
        <div className="col-md-9">{resource.contact}</div>
      </div>
      <div className="row mb-2">
        <div className="col-md-3 fw-bold">Posted by:</div>
        <div className="col-md-9">{resource.user.name}</div>
      </div>
      <div className="row mb-2">
        <div className="col-md-3 fw-bold">Posted on:</div>
        <div className="col-md-9">{formattedDate}</div>
      </div>
    </div>
  );
};

export default ResourceDetails;
