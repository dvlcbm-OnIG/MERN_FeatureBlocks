const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
//create server
const app = express()

const employeeRoutes = require('./routes/employeeRoutes')


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
app.use('/collection1', employeeRoutes);



/*
RESQUEST FLOW
POST /api/employees
        ↓
      Route     - is specifically designed for creating modular route handlers, and middleware can pass control to the next step with next().
        ↓
   Middleware
        ↓
   Controller
        ↓
     Model
        ↓
    MongoDB


  BUILDING FLOW (My approach):

    2. models/    create the schema
        ↓
    4. middleware/          validate all the request
        ↓
    3. controllers/         process the request, request to db, and response to client
        ↓
    5. routes/              manages all the api endpoint
        ↓        
    1. server.js            connect to db and create a server
        ↓
    6. public/              client (frontend)
*/
// CRUD handlers are mounted through employeeRoutes.
/*
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

        const deletedUser = await empModel
            .findByIdAndDelete(id)
            

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
        console.log('removed', deletedUser)

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

//



*/