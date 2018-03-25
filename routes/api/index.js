const router = require("express").Router();
const userRoutes = require("./first");

// Item routes
router.use("/users", userRoutes);

module.exports = router;
