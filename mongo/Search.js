const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    parameter: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    users:[] 
})

const Search = mongoose.model('Search', SearchSchema);
module.exports = Search;

