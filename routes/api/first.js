const router = require("express").Router();
const userController = require("../../controllers/firstController")
// Matches with "/api/items"
router.route("/")
  .get(userController.getAll)


module.exports = router;
