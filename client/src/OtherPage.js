import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    textAlign: "center",
    background: "linear-gradient(to right, #f7f7f7, #e0e0e0)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#666",
  };

  const linkStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background 0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Administración El Duruelo</div>
      <div style={subtitleStyle}>Primera Página</div>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default OtherPage;
