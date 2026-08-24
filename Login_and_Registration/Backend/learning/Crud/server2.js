const express = require('express')
const path = require('path') 

//create sever
const app = express()

//middleware
app.use(express.json())// allows json body
app.use(express.static(path.join(__dirname, './public')))//render anything inside the ./public


let users = [
    {id: 1, name: "Russel", age: 19},
    {id: 2, name: "Almar", age: 19},
    {id: 3, name: "Aedan", age: 19}
]
//get all users
app.get('/api/users', (req, res)=>{
    res.status(201).json(users)
})

//create user
app.post('/api/users', (req, res)=>{
    users.push(req.body)
    res.status(201).json(users)
})

//update user's name or age
app.put('/api/users/:id', (req, res)=>{
    const user = users.find(e => e.id === Number(req.params.id))

    if(req.body.name !== ""){
        user.name = req.body.name
    }
    if(req.body.age !== ""){
        user.age = req.body.age
    }

    res.json(user)
})

//server run
app.listen(3000, ()=>{
    console.log('server running on port 3000')
})