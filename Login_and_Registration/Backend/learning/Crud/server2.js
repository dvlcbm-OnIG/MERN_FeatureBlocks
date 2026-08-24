const express = require('express')
const path = require('path')

//create sever
const app = express()

//middleware
app.use(express.json())// allows json body
app.use(express.static(path.join(__dirname, './public')))//render anything inside the ./public


let users = [
    { id: 1, name: "Russel", age: 19 },
    { id: 2, name: "Almar", age: 19 },
    { id: 3, name: "Aedan", age: 19 }
]
//get all users
app.get('/api/users', (req, res) => {
    res.status(201).json(users)
})

//create user
let ids = 4
app.post('/api/users', (req, res) => {
    users.push({
        id: ids,
        name: req.body.name,
        age: req.body.age
    })
    ids += 1
    res.status(201).json(users)
})

//update user's name or age
app.put('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, age } = req.body;

    if (typeof name === "string" && name.trim() !== "") {
        user.name = name.trim();
    }

    if (age !== undefined && age !== null && age !== "") {
        const newAge = Number(age);

        if (!Number.isFinite(newAge)) {
            return res.status(400).json({
                message: "Age must be a valid number"
            });
        }

        user.age = newAge;
    }

    res.json(user);
})

app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "ID must be a number"
        });
    }

    const idExists = users.some(user => user.id === id);

    if (!idExists) {
        //return prevents the function from continuing after an error response.
        return res.json({
            message: `The ID '${id}' does not exist`
        });
    }

    users = users.filter(user => user.id !== id);

    res.json({
        message: "User deleted",
        users
    });
})

//server run
app.listen(3000, () => {
    console.log('server running on port 3000')
})