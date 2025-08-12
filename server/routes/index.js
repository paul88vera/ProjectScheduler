const express = require("express");
const router = express.Router();
const projectsApi = require("./projects");
const usersApi = require("./users");

router.use("/projects", projectsApi);
router.use("/users", usersApi);

module.exports = router;
