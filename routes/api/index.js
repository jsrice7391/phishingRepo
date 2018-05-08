const router = require("express").Router();
const userRoutes = require("./users");
const searchRoutes = require("./search");

// Item routes
router.use("/users", userRoutes);
router.use("/searches",searchRoutes);

module.exports = router;
