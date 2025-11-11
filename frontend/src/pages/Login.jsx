import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../App.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);

      // ✅ Store token and role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      alert(res.data.message || "Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center fnt" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow loginbg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn login-btn text-white fw-bold w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
