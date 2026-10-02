require('dotenv').config()
const express = require('express');
const bcrypt = require('bcrypt')  //for hashed passwords
const jwt = require('jsonwebtoken')
const app = express();

app.use(express.json())

const posts = [
    {
        username: "russel",
        password: "1234"
    },
    {
        username: "almar",
        password: "1234"
    }
]
app.get('/users',authenticationToken, (req, res)=>{
    res.json(posts.filter(post => post.username === req.user.name))
})


app.post('/login', (req, res) => {
    const username = req.body.username
    const user = {name: username}
    const accesssToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accesssToken: accesssToken})
});

function authenticationToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null ) return res.json("error auth")
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })

}







app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});
