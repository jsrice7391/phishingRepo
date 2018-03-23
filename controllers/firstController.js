const db = require("../models");

module.exports = {
    getAll: (req,res) =>{
        db.User.findALl({}).then(user =>{
            res.json(users)
        })
    }
}