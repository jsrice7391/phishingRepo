const db = require("../models");

module.exports = {
    getAll: (req,res) =>{
        db.User.findAll({}).then(users =>{
            console.log("Here are the users")
            res.json(users)
        });
    },
    search: (req,res) =>{
        db.User.findAll({
            where: {
                user_to: req.quey.subject
            }
        }).then(result =>{
            res.json(result)
        }).catch(err =>{
            return(err)
        })
    }
}