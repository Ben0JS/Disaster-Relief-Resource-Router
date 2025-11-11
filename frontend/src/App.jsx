import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ResourceDetails from "./pages/ResourceDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "50px" }}> {/* ensures footer doesn't overlap content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/resources/:id" element={<ResourceDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
