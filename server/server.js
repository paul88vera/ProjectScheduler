const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5500;
const { projects, users } = require("../api/db.json");

// middleware
app.use(express.json());
app.use(cors());

// -------------------------
// PROJECT ROUTES

// @route    GET /projects
// @desc     Get all projects
// @access   Private - Public For Now
app.get("/projects", (req, res) => {
  res.json(projects);
});

// @route    GET /projects/:ID
// @desc     Get project by ID
// @access   Private - Public For Now
app.get("/projects/:id", (req, res) => {
  res.json(projects);
});
// @route    put /projects/:ID/edit
// @desc     Edit project by ID
// @access   Private - Public For Now
app.put("/projects/:id", (req, res) => {
  res.json(projects);
});

// -------------------------
// USER ROUTES

// @route    GET /users
// @desc     Get all users
// @access   Private - Public For Now
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
