const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(express.json())

app.post('/users1', (req, res) => {
    res.json(req.body)
    console.log(req.body)
})

//render html
app.get('/users1', (req, res) => {
    //res.sendFile(path.join(__dirname, 'fetch.html'))
    //res.json(req.body)

})

app.use((req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('server running')
})