const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5500;
const routes = require("./routes");

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api", routes);

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
