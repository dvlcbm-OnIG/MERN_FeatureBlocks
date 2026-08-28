const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
    name: String,
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        select: false  //excluded from query results by default
    },
    age: Number,
    department: String,
    salary: Number
    },
    {
        timestamps: true  //automatically creates "createdAt" & "updatedAt" then updates it automatically as well
    }
)
//prevent email duplication
employeeSchema.index({ email: 1 }, { unique: true });

const employeeModel = mongoose.model('SWE', employeeSchema)

module.exports = employeeModel