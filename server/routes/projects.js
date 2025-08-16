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
      res.status(500).send("Server error on Projects get");
    } else {
      res.json(results);
    }
  });
});

// @route    GET /projects/:ID
// @desc     Get project by ID
// @access   Private - Public For Now
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM Projects WHERE ProjectID = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Projects get by id");
    } else {
      res.json(results);
    }
  });
});

// @route    put /projects/:ID/edit
// @desc     Edit project by ID
// @access   Private - Public For Now
router.put("/:id", (req, res) => {
  const { id } = req.params;
  //
  const {
    ProjectName,
    ProjectPriority,
    ProjectStatus,
    ProjectColor,
    StartDate,
    DueDate,
    Am,
    AmDays,
    Seo,
    SeoDays,
    CopyName,
    CopyDays,
    Design,
    DesignDays,
    Social,
    SocialDays,
    Dev,
    DevDays,
    Notes,
  } = req.body;
  const query =
    "UPDATE Projects SET ProjectName = ?, ProjectPriority = ?, ProjectStatus = ?, ProjectColor = ?, StartDate = ?, DueDate = ?, Am = ?, AmDays = ?, Seo = ?, SeoDays = ?, CopyName = ?, CopyDays = ?, Design = ?, DesignDays = ?, Social = ?, SocialDays = ?, Dev = ?, DevDays = ?, Notes = ? WHERE ProjectID = ?";
  db.query(
    query,
    [
      ProjectName,
      ProjectPriority,
      ProjectStatus,
      ProjectColor,
      StartDate,
      DueDate,
      Am,
      AmDays,
      Seo,
      SeoDays,
      CopyName,
      CopyDays,
      Design,
      DesignDays,
      Social,
      SocialDays,
      Dev,
      DevDays,
      Notes,
      id,
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server error on Projects udpate");
      } else {
        res.json(results);
      }
    }
  );
});

// @route    POST /projects/:id
// @desc     Create a project
// @access   Private - Public For Now
router.post("/", (req, res) => {
  const { id } = req.params;
  const {
    ProjectName,
    ProjectPriority,
    ProjectStatus,
    ProjectColor,
    StartDate,
    DueDate,
    Am,
    AmDays,
    Seo,
    SeoDays,
    CopyName,
    CopyDays,
    Design,
    DesignDays,
    Social,
    SocialDays,
    Dev,
    DevDays,
    Notes,
  } = req.body;
  const query =
    "INSERT INTO Projects (ProjectName, ProjectPriority, ProjectStatus, ProjectColor, StartDate, DueDate, Am, AmDays, Seo, SeoDays, CopyName, CopyDays, Design, DesignDays, Social, SocialDays, Dev, DevDays, Notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    query,
    [
      ProjectName,
      ProjectPriority,
      ProjectStatus,
      ProjectColor,
      StartDate,
      DueDate,
      Am,
      AmDays,
      Seo,
      SeoDays,
      CopyName,
      CopyDays,
      Design,
      DesignDays,
      Social,
      SocialDays,
      Dev,
      DevDays,
      Notes,
      id,
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server error on Projects udpate");
      } else {
        res.json(results);
      }
    }
  );
});

// @route    DELETE /projects/:id
// @desc     Delete project by id
// @access   Private - Public For Now
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Projects WHERE ProjectID = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.send("Project Deleted");
    }
  });
});

module.exports = router;
