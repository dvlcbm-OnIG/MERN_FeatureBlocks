const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let users = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 22 }
];

// READ - get all
app.get("/api/users", (req, res) => {
  res.json(users);
});

// READ - get one
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// CREATE
app.post("/api/users", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name,
    age: req.body.age
  };

  users.push(user);

  res.status(201).json(user);
});

// UPDATE
app.put("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  user.age = req.body.age;

  res.json(user);
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const exists = users.some(u => u.id === id);

  if (!exists) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter(u => u.id !== id);

  res.json({ message: "User deleted" });
});


app.use((req, res)=>{
  res.send('404 not found')
})
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log(`Server running`);
});