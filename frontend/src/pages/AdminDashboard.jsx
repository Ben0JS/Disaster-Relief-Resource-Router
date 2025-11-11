import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResourceCard from "../components/ResourceCard";
import Loader from "../components/Loader";
import MapView from "../components/MapView";

const AdminDashboard = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 Fetch all resources (admin-only route)
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Please login first");
          return navigate("/login");
        }

        const res = await axios.get("http://localhost:5000/api/admin/resources", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setResources(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        alert(err.response?.data?.message || "Access denied or server error");

        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [navigate]);

  // 🔹 Delete a resource
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resource?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/resources/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResources(resources.filter((r) => r._id !== id));
      alert("Resource deleted successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <Loader />;

  return (
<div className="container my-4 fnt">
  <h2 className="mb-4">Admin Dashboard</h2>
  <button
    onClick={handleLogout}
    className="btn btn-danger mb-4"
    style={{ borderRadius: "5px" }}
  >
    Logout
  </button>

  <MapView resources={resources} />

  {resources.length === 0 ? (
    <p>No resources found.</p>
  ) : (
    resources.map((r) => (
      <ResourceCard
        key={r._id}
        resource={r}
        showDelete={true} // admin can delete
        onDelete={handleDelete}
      />
    ))
  )}
</div>

  );
};

export default AdminDashboard;
