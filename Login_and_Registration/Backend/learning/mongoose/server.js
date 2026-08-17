const express = require('express')
const mongoose = require('mongoose')

const EmployeeModel = require('./employee')
const activity = require('./activityLesson')
const quiz1 = require('./quiz1')

const app = express()
app.use(express.json())

//we have a collection called "example1" inside of this db
const mongoUri = 'mongodb://127.0.0.1:27017/example1_0'     //this creates a database right away called "example1_0"

mongoose.connect(mongoUri)
    .then(() => {
        console.log('MongoDB connected')
        app.listen(3000, () => {
            console.log('Server running on port 3000')
        })
    })
    .catch(err => console.log(err))

//modular
//quiz1(app, EmployeeModel)
activity(app, EmployeeModel)
