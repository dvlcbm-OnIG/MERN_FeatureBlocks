const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

//create server
const app = express()
//middleware
app.use(express.json())
app.use(cors())

const mongoUri = 'mongodb://127.0.0.1:27017/employee'

async function start() {
    try{
        await mongoose.connect(mongoUri)
        console.log('connected to database')
        app.listen(3001, ()=>{
            console.log('server is running')
        })
    }catch(err){
        console.error('database connection failed:', err.message)
    }
}
start()

//acquire login credentials
app.post('/login', async (req, res)=>{

    try{
        const {name, email, password} = req.body
        const user = await EmployeeModel.findOne({email: email})
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json('the password is incorrect')
            }
        }else{
            res.json("no record existed")
        }
    }catch(err){
        res.status(500).json({ error: err.message })
    }

});

//acquire resgister credentials
app.post('/register', async (req, res)=>{

    try{
        const employee = await EmployeeModel.create(req.body)
        res.json(employee)
    }catch(err){
        res.status(500).json({ error: err.message })
    }

});