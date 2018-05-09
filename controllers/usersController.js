const db = require("../models");
const mongo = require("../mongo");
const sequelize = require("sequelize");
const Op = sequelize.Op;



module.exports = {
    getAll: (req,res) =>{
        db.User.findAll({}).then(users =>{
            console.log("Here are the users")
            res.json(users)
        });
    },
    search: (req,res) =>{
        console.log(req.query.search)
        db.sequelize.query(`SELECT * FROM users WHERE ${req.query.searchParam} LIKE '%${req.query.search}%';`, {type: sequelize.QueryTypes.SELECT})
        .then(users =>{
            mongo.Search.create({
                title: `${req.query.searchParam} containing ${req.query.search}`,
                date: req.query.date,
                parameter: req.query.searchParam,
                query: req.query.search,
                total: users.length,
                users: [users]
            })
          res.json(users)
        })
    }
}
