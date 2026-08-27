const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: {
        type: String,
        select: false 
    }
})
                        //      model name      schema the model should use
const empModel = mongoose.model('collection1', empSchema) //databse wont create without this collection declared

module.exports = empModel



// mongoose.model('collection1', 
//     new mongoose.Schema({
//     name: String,
//     age: Number,
//     password: {
//         type: String,
//         select: false 
//     }
// })
// ).create({ 
// 	name: name.trim(), 
//     age: Number(age), 
// 	password: password 
// });