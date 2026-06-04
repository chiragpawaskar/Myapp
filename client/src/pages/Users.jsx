import React, { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser } from "../api/users";

const s = {
  page: { maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" },
  label: { fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8f547", fontWeight: 600, marginBottom: "0.5rem" },
  h2: { fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em" },
  addBtn: { background: "#c8f547", color: "#0d0d0d", fontWeight: 700, padding: "0.6rem 1.4rem", borderRadius: "8px", border: "none", fontSize: "0.9rem" },
  form: { background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "0.75rem", alignItems: "end" },
  formGroup: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  formLabel: { fontSize: "0.8rem", color: "rgba(240,240,232,0.5)" },
  input: { background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.65rem 1rem", color: "#f0f0e8", fontSize: "0.9rem", outline: "none" },
  submitBtn: { background: "#c8f547", color: "#0d0d0d", fontWeight: 700, padding: "0.65rem 1.25rem", borderRadius: "8px", border: "none", fontSize: "0.9rem", alignSelf: "end" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { textAlign: "left", padding: "0.75rem 1rem", fontSize: "0.8rem", color: "rgba(240,240,232,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.07)" },
  td: { padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.9rem" },
  badge: { background: "rgba(200,245,71,0.12)", color: "#c8f547", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600 },
  deleteBtn: { background: "transparent", border: "1px solid rgba(255,80,80,0.3)", color: "rgba(255,100,100,0.7)", padding: "0.3rem 0.7rem", borderRadius: "6px", fontSize: "0.8rem", cursor: "pointer" },
  empty: { textAlign: "center", padding: "3rem", color: "rgba(240,240,232,0.3)" },
  error: { background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.2)", borderRadius: "8px", padding: "0.75rem 1rem", color: "#ff8080", marginBottom: "1rem", fontSize: "0.875rem" },
};

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setError("");
    } catch {
      setError("Could not connect to the server. Make sure it is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    try {
      const newUser = await createUser(form);
      setUsers((prev) => [...prev, newUser]);
      setForm({ name: "", email: "" });
      setShowForm(false);
    } catch {
      setError("Failed to create user.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch {
      setError("Failed to delete user.");
    }
  };

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div>
          <div style={s.label}>API Demo</div>
          <h2 style={s.h2}>Users</h2>
        </div>
        <button style={s.addBtn} onClick={() => setShowForm((v) => !v)}>
          {showForm ? "Cancel" : "+ Add User"}
        </button>
      </div>

      {error && <div style={s.error}>{error}</div>}

      {showForm && (
        <div style={s.form}>
          <div style={s.formGroup}>
            <label style={s.formLabel}>Name</label>
            <input style={s.input} placeholder="Full name" value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
          </div>
          <div style={s.formGroup}>
            <label style={s.formLabel}>Email</label>
            <input style={s.input} placeholder="email@example.com" value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
          </div>
          <button style={s.submitBtn} onClick={handleSubmit}>Create</button>
        </div>
      )}

      {loading ? (
        <div style={s.empty}>Loading users…</div>
      ) : (
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>ID</th>
              <th style={s.th}>Name</th>
              <th style={s.th}>Email</th>
              <th style={s.th}>Role</th>
              <th style={s.th}></th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr><td colSpan={5} style={s.empty}>No users found.</td></tr>
            ) : (
              users.map((u) => (
                <tr key={u.id}>
                  <td style={{ ...s.td, color: "rgba(240,240,232,0.35)", fontSize: "0.8rem" }}>#{u.id}</td>
                  <td style={s.td}>{u.name}</td>
                  <td style={{ ...s.td, color: "rgba(240,240,232,0.55)" }}>{u.email}</td>
                  <td style={s.td}><span style={s.badge}>{u.role}</span></td>
                  <td style={s.td}>
                    <button style={s.deleteBtn} onClick={() => handleDelete(u.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
