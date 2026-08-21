const express = require('express')
const mongoose = require('mongoose')

const EmployeeModel = require('../employee')
const activity = require('../activityLesson')

const quiz1 = require('./quiz1')
const quiz2 = require('./quiz2')
const quiz3 = require('./quiz3')
const quiz4 = require('./quiz4')
const quiz5 = require('./quiz5')

const app = express()
app.use(express.json())

//we have a collection called "example1" inside of this db
const mongoUri = 'mongodb://127.0.0.1:27017/example1_0'     //this creates a database right away called "example1_0"

async function server(){
    try{
        await mongoose.connect(mongoUri)

        console.log('MongoDB connected')
        app.listen(3000, () => {
            console.log('ServerTest running on port 3000')
        })
    }catch(err){
        console.error('database connection failed: ', err.message)
    }
}
server()

// ===== routes =====

//activity(app, EmployeeModel) //POST
//quiz1(app, EmployeeModel)   //Quiz 1 — MongoDB Query Operators
//quiz2(app, EmployeeModel)   //Quiz 2 — MongoDB Query Operators: Advanced Filtering
//quiz3(app, EmployeeModel)     //Quiz 3 — Advanced MongoDB Operators
//quiz4(app, EmployeeModel)  //Quiz4  - Mongoose Query Methods
quiz5(app, EmployeeModel)