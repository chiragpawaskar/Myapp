import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    height: "60px",
    background: "rgba(13,13,13,0.9)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontWeight: 800,
    fontSize: "1.2rem",
    letterSpacing: "-0.03em",
  },
  accent: { color: "#c8f547" },
  links: { display: "flex", gap: "2rem" },
  link: { fontSize: "0.875rem", color: "rgba(240,240,232,0.5)", transition: "color 0.2s" },
  activeLink: { fontSize: "0.875rem", color: "#f0f0e8" },
  cta: {
    background: "#c8f547",
    color: "#0d0d0d",
    fontWeight: 700,
    padding: "0.45rem 1.1rem",
    borderRadius: "999px",
    fontSize: "0.85rem",
    border: "none",
  },
};

function Navbar() {
  const { pathname } = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/users", label: "Users" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        my<span style={styles.accent}>App</span>
      </Link>
      <div style={styles.links}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={pathname === path ? styles.activeLink : styles.link}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link to="/contact">
        <button style={styles.cta}>Get Started</button>
      </Link>
    </nav>
  );
}

export default Navbar;
