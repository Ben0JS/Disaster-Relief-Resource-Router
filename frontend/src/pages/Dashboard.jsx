import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import ResourceForm from "../components/ResourceForm";
import ResourceCard from "../components/ResourceCard";
import Loader from "../components/Loader";
import MapView from "../components/MapView";


const Dashboard = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch resources once from API
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await API.get("/resources");
        setResources(res.data);
      } catch (err) {
        alert("Failed to fetch resources");
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  // Add new resource to state
  const handleAdd = (newResource) => {
    setResources([newResource, ...resources]);
  };

  // Delete resource
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resource?")) return;
    try {
      await API.delete(`/resources/${id}`);
      setResources(resources.filter(r => r._id !== id));
      alert("Resource deleted successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <Loader />;

  return (
    <div className="container my-4 fnt">
      <h2 className="mb-4">Dashboard</h2>
      <button onClick={handleLogout} className="btn searchbtn text-white mb-4">
        Logout
      </button>

      {/* Form to add resource */}
      <ResourceForm onAdd={handleAdd} />

      {/* Map view */}
      <MapView resources={resources} />

      {/* Resource cards */}
      {resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        resources.map(r => (
          <ResourceCard
            key={r._id}
            resource={r}
            showDelete={true}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Dashboard;
