const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;



module.exports = {
    getAll: (req,res) =>{
        db.User.findAll({}).then(users =>{
            console.log("Here are the users")
            res.json(users)
        });
    },
    search: (req,res) =>{
        console.log(req.query.search)
        db.User.findAll({
          where: {
            user_from: req.query.search
          }
        })
          .then(result => {
            console.log(result);
            res.json(result);
          })
          .catch(err => {
            return err;
          });
    }
}