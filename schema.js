const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const program = new Schema({
    category: String,
    title: String,
    program: String,
    out: String
});

module.exports = mongoose.model('program', program);