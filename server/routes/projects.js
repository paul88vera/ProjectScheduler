const express = require("express");
const router = express.Router();

const db = require("../db/connection");

// @route    GET /projects
// @desc     Get all projects
// @access   Private - Public For Now
router.get("/", (req, res) => {
  const query = "SELECT * FROM Projects";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Projects");
    } else {
      res.json(results);
    }
  });
});

// TODO - Change these to SQL Queries
// @route    GET /projects/:ID
// @desc     Get project by ID
// @access   Private - Public For Now
router.get("projects/:id", (req, res) => {
  res.json(projects);
});
// @route    put /projects/:ID/edit
// @desc     Edit project by ID
// @access   Private - Public For Now
router.put("projects/:id", (req, res) => {
  res.json(projects);
});

// @route    POST /projects/:id
// @desc     Create a project
// @access   Private - Public For Now
router.post("projects", (req, res) => {
  res.json(projects);
});

// @route    DELETE /projects/:id
// @desc     Delete project by id
// @access   Private - Public For Now
router.delete("projects/:id", (req, res) => {
  res.json(projects);
});

module.exports = router;
