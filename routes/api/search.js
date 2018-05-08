const router = require("express").Router();
const searchController = require("../../controllers/searchesController");

router.route("/")
    .get(searchController.getSearches)



module.exports = router;