const express = require("express");
const router = express.Router();

const db = require("../db/connection");

// USERS ROUTE
// @route    GET /users
// @desc     Get all users
// @access   Private - Public For Now
router.get("/", (req, res) => {
  const query = "SELECT * FROM Users";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Users");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
