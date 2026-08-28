const express = require('express')
const mongoose = require('mongoose')
//create server
const app = express()

const employeeRoutes = require('./routes/employeeRoute')


//middleware
app.use(express.json())


//connect to db

async function dbConnect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/software')

        console.log("successfully connected to db!");
        app.listen(3000, () => {
            console.log("server is now running...")
        })
    } catch (err) {
        console.log("failed to connect to the db: ", err.message)
    }
}

dbConnect()

//create users  (api endpoint)
app.use('/SWE', employeeRoutes);

