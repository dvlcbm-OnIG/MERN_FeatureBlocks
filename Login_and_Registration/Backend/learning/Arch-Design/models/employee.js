const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
    name: String,
    email: String,
    password: {
        type: String,
        select: false  //cannot be queried
    },
    age: Number,
    department: String,
    salary: Number
    },
    {
        timestamps: true  //automatically creates "createdAt" & "updatedAt" then updates it automatically as well
    }
)

const employeeModel = mongoose.model('SWE', employeeSchema)

module.exports = employeeModel