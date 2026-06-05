import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { _encatch } from "@encatch/web-sdk";

const s = {
  hero: {
    minHeight: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "4rem 2rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "999px",
    padding: "0.3rem 1rem",
    fontSize: "0.8rem",
    color: "rgba(240,240,232,0.5)",
    marginBottom: "2rem",
    background: "#161616",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#c8f547",
    display: "inline-block",
  },
  h1: {
    fontSize: "clamp(3rem, 8vw, 6rem)",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    marginBottom: "1.5rem",
  },
  accent: { color: "#c8f547", fontStyle: "normal" },
  p: {
    color: "rgba(240,240,232,0.5)",
    fontSize: "1.1rem",
    maxWidth: "500px",
    marginBottom: "2.5rem",
  },
  btns: { display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" },
  btnPrimary: {
    background: "#c8f547",
    color: "#0d0d0d",
    fontWeight: 700,
    padding: "0.8rem 2rem",
    borderRadius: "999px",
    fontSize: "0.95rem",
    border: "none",
  },
  btnSecondary: {
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#f0f0e8",
    padding: "0.8rem 2rem",
    borderRadius: "999px",
    fontSize: "0.95rem",
    background: "transparent",
  },
};

function Home() {

 useEffect(() => {
  console.log("Tracking Home Visit");
  _encatch.trackEvent("page_home_visited");
}, []);

  return (
    <div style={s.hero}>
      <div style={s.badge}>
        <span style={s.dot} />
        React + Node.js full stack starter
      </div>
      <h1 style={s.h1}>
        Build faster.<br />
        <em style={s.accent}>Ship</em> smarter.
      </h1>
      <p style={s.p}>
        A production-ready web app using React on the frontend and Node.js +
        Express on the backend. Start building in minutes.
      </p>
      <div style={s.btns}>
        <Link to="/users">
          <button style={s.btnPrimary}>View Users API</button>
        </Link>
        <Link to="/about">
          <button style={s.btnSecondary}>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
