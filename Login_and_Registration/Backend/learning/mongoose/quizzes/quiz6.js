const DateTime = require('./DateTime')

//Creating Documents
function quiz6(app, emp){

    app.post('/example1', async(req, res)=>{
        
        //item1
        await emp.updateOne(
            {name: "Alice"},
            {$set: {salary: 35000}}
        )

        //item2 (comment to prevent updating every request)
        // await emp.updateMany(
        //     {department: 'Finance'},
        //     {$inc: {salary: 3000}}
        // )
        
        //item3 (comment to prevent updating every request)
        // const item3 = await emp.findOneAndUpdate(
        //     {name: 'Bob'},
        //     {$inc: {salary: 5000}}
        // )

        //item4
        const item4 = await emp.findByIdAndUpdate(
            '6a8821813a58fb792f5f5331',
            {$set: {department: 'Finance'}}
        )

        //item5
        // await emp.updateMany(
        //     {department: 'Marketing'},
        //     {$mul: {salary: 2}}
        // )

        //item6
        await emp.updateOne(
            {name: "Russel"},
            {$max: {salary: 30000}}
        
        )        


       res.json(item4) 
    })
}

module.exports = quiz6