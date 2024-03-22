const express = require("express");
const postRoutes = require("./postRoutes.js");

// Create router instance
const router = express.Router();

router.use("/posts", postRoutes);

// export configured routes
module.exports = router;
