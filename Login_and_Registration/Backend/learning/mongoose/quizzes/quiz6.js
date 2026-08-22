const DateTime = require('./DateTime')

//Creating Documents
function quiz6(app, emp){

    app.get('/example1', async (req, res)=>{

        const findAll = await emp.find({
        })
        res.json(findAll)
    })

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
        //     {$inc: {salary: 5000}},
        //     {new: true}  Return the document AFTER the update
        // )

        //item4
        const item4 = await emp.findByIdAndUpdate(
            '6a8821813a58fb792f5f5331',
            {$set: {department: 'Finance'}},
            { new: true }

        )

        //item5
        // await emp.updateMany(
        //     {department: 'Marketing'},
        //     {$mul: {salary: 2}}
        // )

        //item6
        // await emp.updateOne(
        //     {name: "Russel"},
        //     {$max: {salary: 30000}}
        
        // )
        

        //item7
        await emp.updateMany(
            {department: 'HR'},
            {$max: {salary: 40000}}
        )

        //item8
        await emp.updateOne(
            {name: 'Russel'},
            {$unset: {password: ''}} //removes the field "password"
        )

        // //item9
        // await emp.updateMany(
        //     {salary: {$lt: 30000}},
        //     {$inc: {salary: 2000}}
        // )

        //item10
        const item10 = await emp.findOneAndUpdate(
            {email: 'lol'},
            {$mul: {salary: 1.10}},
            {new: true}
        )
        
        if(item10){
            res.json(item10)
        }else{
            res.json("Employee not found")
        }



        // //applied modified time tracker
        // await emp.updateMany(
        //     {modifiedTime: {$exists: false}},
        //     {$set: {modifiedTime: new Date()}}
        // )


    })
}

module.exports = quiz6