// In-memory store — replace with DB queries when ready
let users = [
  { id: 1, name: "Chirag Mehta",   email: "chirag@example.com",   role: "admin" },
  { id: 2, name: "Muzammil Mulla", email: "muzammil@example.com", role: "user" },
  { id: 3, name: "Anurag Sahu",    email: "anurag@example.com",   role: "user" },
];
let nextId = 4;

const find = (id) => users.find((u) => u.id === parseInt(id));

exports.getAllUsers = (req, res) => {
  res.json({ success: true, count: users.length, data: users });
};

exports.getUserById = (req, res) => {
  const user = find(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  res.json({ success: true, data: user });
};

exports.createUser = (req, res) => {
  const { name, email, role = "user" } = req.body;
  if (!name || !email)
    return res.status(400).json({ success: false, message: "Name and email are required" });
  const newUser = { id: nextId++, name, email, role };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
};

exports.updateUser = (req, res) => {
  const user = find(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  const { name, email, role } = req.body;
  if (name)  user.name  = name;
  if (email) user.email = email;
  if (role)  user.role  = role;
  res.json({ success: true, data: user });
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: "User not found" });
  const deleted = users.splice(index, 1)[0];
  res.json({ success: true, data: deleted });
};
