const express = require('express')
const app = express()
const path = require('path')

//middleware
app.use(express.json())

//store data
let users = []


//when submit data
app.post('/loginApi', (req, res) => {

    users.push(req.body)

    res.json({
        message: "Login data received"
    });
})

//query the sent api
app.get('/loginApi', (req, res) => {
    res.json(users)
})

app.get('/fetch', (req, res) => {
    res.sendFile(path.join(__dirname, 'fetch.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req, res) => {
    res.send('404 not found')
})

const IPv4 = '192.168.68.113'
app.listen(3000, IPv4, () => {
    console.log(`server running on port 30000, or to any devices: http://${IPv4}:3000`)
})