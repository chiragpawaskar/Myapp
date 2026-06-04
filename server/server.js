require("dotenv").config();           // looks for .env in current folder (server/)
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ────────────────────────────────────

// Base /api route — shows all available endpoints
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "MyApp API is running!",
    endpoints: {
      health:      "GET  /api/health",
      getUsers:    "GET  /api/users",
      createUser:  "POST /api/users",
      getUser:     "GET  /api/users/:id",
      updateUser:  "PUT  /api/users/:id",
      deleteUser:  "DELETE /api/users/:id",
    },
  });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/users", userRoutes);

// ── 404 handler ──────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.path} not found` });
});

// ── Error handler ─────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ── Start ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ✅ Server running at http://localhost:${PORT}`);
  console.log(`  📋 Available routes:`);
  console.log(`     GET    http://localhost:${PORT}/api`);
  console.log(`     GET    http://localhost:${PORT}/api/health`);
  console.log(`     GET    http://localhost:${PORT}/api/users`);
  console.log(`     POST   http://localhost:${PORT}/api/users`);
  console.log(`     GET    http://localhost:${PORT}/api/users/:id`);
  console.log(`     PUT    http://localhost:${PORT}/api/users/:id`);
  console.log(`     DELETE http://localhost:${PORT}/api/users/:id\n`);
});
