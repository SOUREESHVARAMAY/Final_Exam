import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", marginBottom: "20px" }}>About the App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="team" style={{ marginRight: "15px", color: "#007bff", textDecoration: "none" }}>Team</Link>
        <Link to="mission" style={{ color: "#007bff", textDecoration: "none" }}>Mission</Link>
      </nav>
      <Routes>
        <Route path="team" element={<p style={{ fontSize: "16px", color: "#555" }}>Our team is awesome!</p>} />
        <Route path="mission" element={<p style={{ fontSize: "16px", color: "#555" }}>Our mission is to make great apps!</p>} />
      </Routes>
    </div>
  );
};

export default About;
