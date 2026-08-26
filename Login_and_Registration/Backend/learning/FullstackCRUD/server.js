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

app.get('/showUsers', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'showUsers.html'))
})


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

    // Name Validation
    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    // Password Validation
    if (password === undefined || (typeof password === "string" && password.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "Password is required"
        });
    }
    // Password Validation
    if (typeof password !== "string") {
        return res.status(400).json({
            success: false,
            message: "Password must be a string"
        });
    }

    // Age Validation
    if (age === undefined || age === null || (typeof age === "string" && age.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "Age is required"
        });
    }

    const newAge = Number(age);

    if (!Number.isInteger(newAge)) {
        return res.status(400).json({
            success: false,
            message: "Age must be a whole number"
        });
    }

    if (newAge < 1 || newAge > 120) {
        return res.status(400).json({
            success: false,
            message: "Age must be between 1 and 120"
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


//get users
app.get('/collection1', async (req, res) => {

    try{
        const users = await empModel
        .find()
        .select('name age') //only query the name and age, and don't include the others including "id"

        res.json(users)
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Internal server errors"
        })
    }
})





//AI genrated. Change later
app.delete('/collection1/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await empModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});