const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: String
})

const empModel = mongoose.model('collection1', empSchema) //databse wont create without this collection declared

module.exports = empModel