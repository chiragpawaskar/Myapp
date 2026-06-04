import React from "react";

const s = {
  page: { maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" },
  label: { fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8f547", fontWeight: 600, marginBottom: "0.75rem" },
  h2: { fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem" },
  p: { color: "rgba(240,240,232,0.6)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1.05rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginTop: "2.5rem" },
  card: { background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "1.5rem" },
  cardIcon: { fontSize: "1.5rem", marginBottom: "0.75rem" },
  cardTitle: { fontWeight: 600, marginBottom: "0.4rem" },
  cardText: { fontSize: "0.875rem", color: "rgba(240,240,232,0.5)" },
};

const features = [
  { icon: "⚡", title: "Express API", text: "REST endpoints with full CRUD support" },
  { icon: "⚛️", title: "React 18", text: "Hooks, Router, and Context API ready" },
  { icon: "🔌", title: "Axios", text: "Pre-configured HTTP client with proxy" },
  { icon: "🛡️", title: "CORS + dotenv", text: "Secure, environment-aware config" },
];

function About() {
  return (
    <div style={s.page}>
      <div style={s.label}>About this project</div>
      <h2 style={s.h2}>What's included</h2>
      <p style={s.p}>
        This is a minimal but complete fullstack starter. The React frontend
        communicates with the Node.js backend via Axios, with a proxy configured
        so you never have to worry about CORS during development.
      </p>
      <p style={s.p}>
        The backend uses an in-memory store by default — swap it for MongoDB or
        PostgreSQL when you're ready to persist data.
      </p>
      <div style={s.grid}>
        {features.map((f) => (
          <div key={f.title} style={s.card}>
            <div style={s.cardIcon}>{f.icon}</div>
            <div style={s.cardTitle}>{f.title}</div>
            <div style={s.cardText}>{f.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
