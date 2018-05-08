const db = require("../models");
const mongo = require("../mongo");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = {
    getSearches: (req,res) => {
        mongo.Search.find({}, (err, searches) => {
            res.json(searches);
        })

    }
}