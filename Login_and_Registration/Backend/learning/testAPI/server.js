const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(express.json())

let users = []
app.post('/users2', (req, res) => {
    users.push(req.body)
    res.json(req.body)
})

//render html
app.get('/users2', (req, res) => {
    
    res.json(users)
})
app.get('/users1', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'fetch.html'))
})

app.use((req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('server running')
})