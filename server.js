const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const db = require("./models");
const mongo = require("./mongo")
const PORT = process.env.PORT || 3001;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017", function (err, db) {
    if (err) { return console.dir(err); }
    console.log(`
    
    Mongo Connected
    
    `)





});


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
// Add routes, both API and view
app.use(routes);


module.exports.app = app;



// Start the app
db.sequelize.sync()
    .then(() => app.listen(PORT, function () {
        console.log("APP is listening on Port: " + PORT);
    }));