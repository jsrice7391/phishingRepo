const router = require("express").Router();
const userController = require("../../controllers/usersController")
// Matches with "/api/items"
router.route("/")
  .get(userController.getAll)

router.route("/search")
    .get(userController.search)


module.exports = router;
