import React, { useState } from "react";

const s = {
  page: { maxWidth: "600px", margin: "0 auto", padding: "4rem 2rem" },
  label: { fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8f547", fontWeight: 600, marginBottom: "0.75rem" },
  h2: { fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "0.75rem" },
  sub: { color: "rgba(240,240,232,0.5)", marginBottom: "2.5rem" },
  form: { display: "grid", gap: "1rem" },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  group: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  lbl: { fontSize: "0.8rem", color: "rgba(240,240,232,0.5)" },
  input: { background: "#161616", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.7rem 1rem", color: "#f0f0e8", fontSize: "0.9rem", outline: "none", fontFamily: "inherit" },
  textarea: { background: "#161616", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.7rem 1rem", color: "#f0f0e8", fontSize: "0.9rem", outline: "none", resize: "vertical", minHeight: "120px", fontFamily: "inherit" },
  btn: { background: "#c8f547", color: "#0d0d0d", fontWeight: 700, padding: "0.85rem 2rem", borderRadius: "8px", border: "none", fontSize: "0.95rem", alignSelf: "start", fontFamily: "inherit" },
  success: { background: "rgba(127,243,196,0.1)", border: "1px solid rgba(127,243,196,0.25)", borderRadius: "8px", padding: "1rem 1.25rem", color: "#7ff3c4", fontSize: "0.9rem", marginTop: "1rem" },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const h = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={s.page}>
      <div style={s.label}>Get in touch</div>
      <h2 style={s.h2}>Contact us</h2>
      <p style={s.sub}>Have a question or want to collaborate? Send us a message.</p>

      <div style={s.form}>
        <div style={s.row}>
          <div style={s.group}>
            <label style={s.lbl}>Name</label>
            <input style={s.input} name="name" placeholder="Your name" value={form.name} onChange={h} />
          </div>
          <div style={s.group}>
            <label style={s.lbl}>Email</label>
            <input style={s.input} name="email" type="email" placeholder="you@example.com" value={form.email} onChange={h} />
          </div>
        </div>
        <div style={s.group}>
          <label style={s.lbl}>Message</label>
          <textarea style={s.textarea} name="message" placeholder="Tell us about your project…" value={form.message} onChange={h} />
        </div>
        <button style={s.btn} onClick={submit}>Send Message</button>
      </div>

      {sent && <div style={s.success}>✓ Message sent! We'll get back to you shortly.</div>}
    </div>
  );
}

export default Contact;
