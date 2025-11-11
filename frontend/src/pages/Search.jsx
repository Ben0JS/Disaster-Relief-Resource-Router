import React, { useState } from "react";
import API from "../services/api";
import ResourceList from "../components/ResourceList";

const Search = () => {
  const [filters, setFilters] = useState({ location: "", type: "" });
  const [resources, setResources] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let query = [];
      if (filters.location) query.push(`location=${filters.location}`);
      if (filters.type) query.push(`type=${filters.type}`);
      const queryString = query.length ? `?${query.join("&")}` : "";
      const res = await API.get(`/resources${queryString}`);
      setResources(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to fetch resources");
    }
  };

  return (
    <div className="container my-4 fnt">
      <h2 className="text-center mb-4">Search Resources</h2>
      <form
        onSubmit={handleSearch}
        className="d-flex flex-column align-items-center"
        style={{ gap: "15px", maxWidth: "300px", margin: "0 auto" }}
      >
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="type"
          placeholder="Resource Type"
          value={filters.type}
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn searchbtn text-white fw-bold w-100 py-2">
          Search
        </button>
      </form>

      <ResourceList resources={resources} />
    </div>
  );
};

export default Search;
