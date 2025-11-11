import React, { useState } from "react";
import API from "../services/api";

const ResourceForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    type: "",
    description: "",
    location: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fetch coordinates from OpenStreetMap Nominatim
  const getCoordinates = async (address) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json`
      );
      const data = await res.json();
      if (data.length === 0) return null;
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };
    } catch (err) {
      console.error("Geocoding error:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Get coordinates
      const coords = await getCoordinates(form.location);
      if (!coords) {
        alert("Invalid address. Please enter a valid location.");
        setLoading(false);
        return;
      }

      // 2️⃣ Send data to API with coordinates
      const res = await API.post("/resources", {
        ...form,
        latitude: coords.latitude,
        longitude: coords.longitude,
        postedDate: new Date().toISOString(),
      });

      alert("Resource added successfully!");
      setForm({ type: "", description: "", location: "", contact: "" });
      onAdd(res.data); // update parent
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add resource");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center fnt "
      style={{ gap: "15px", maxWidth: "400px", margin: "0 auto" }}
    >
      <input
        type="text"
        name="type"
        placeholder="Resource Type"
        value={form.type}
        onChange={handleChange}
        required
        className="form-control bdr"
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
        className="form-control bdr"
      />

      <input
        type="text"
        name="location"
        placeholder="Enter Address (e.g., Chennai, India)"
        value={form.location}
        onChange={handleChange}
        required
        className="form-control bdr"
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={form.contact}
        onChange={handleChange}
        required
        className="form-control bdr"
      />

      <button
        type="submit"
        className="btn searchbtn text-white fw-bold py-2 w-100"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Resource"}
      </button>
    </form>
  );
};

export default ResourceForm;
