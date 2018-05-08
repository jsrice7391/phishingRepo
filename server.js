const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const db = require("./models");
const mongo = require("./mongo")
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Retrieve
var MongoClient = require('mongodb').MongoClient;


mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/phishing"
);


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