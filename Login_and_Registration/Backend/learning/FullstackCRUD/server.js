const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
//create server
const app = express()

//routes
const empModel = require('./models/employee')


//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, './public'))) //render frontend


//connect to db

async function dbConnect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/databaseOne')

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
app.post('/collection1', async (req, res) => {

    const { name, age, password } = req.body

    try {
        await empModel.create({
            name: name,
            password: password,
            age: age
        })

        res.json({
            success: true,
            message: "Successfully submitted"
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "We could not submit your details. Please check the form and try again."
        })
    }
})




//get the api end point to let the frontend fetch the data