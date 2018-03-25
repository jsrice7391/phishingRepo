const db = require("../models");
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
        db.sequelize.query(`SELECT * FROM users WHERE user_from LIKE '${req.query.search}%';`, {type: sequelize.QueryTypes.SELECT})
        .then(users =>{
          console.log(users);
          res.json(users)
        })
    }
}