const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    department: String,
    salary: Number,
    startTime: String
})

const EmployeeModel = mongoose.model('example1', EmployeeSchema) //this creates a collection called "example1"

module.exports = EmployeeModel