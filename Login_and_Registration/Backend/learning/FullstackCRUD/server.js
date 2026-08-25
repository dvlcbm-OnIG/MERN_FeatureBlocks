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

    const { name, age, password } = req.body;

    // Validation
    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    if (password === undefined) {
    return res.status(400).json({
        success: false,
        message: "Password is required"
    });
}

if (typeof password !== "string") {
    return res.status(400).json({
        success: false,
        message: "Password must be a string"
    });
}

if (password.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Password is required"
    });
}

    const newAge = Number(age);

    if (!Number.isInteger(newAge) || newAge < 1 || newAge > 120) {
        return res.status(400).json({
            success: false,
            message: "Age must be a whole number between 1 and 120"
        });
    }

    // Everything passed validation
    try {

        const employee = await empModel.create({
            name: name.trim(),
            age: newAge,
            password: password
        });

        res.status(201).json({
            success: true,
            message: "Successfully submitted"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});




//get the api end point to let the frontend fetch the data