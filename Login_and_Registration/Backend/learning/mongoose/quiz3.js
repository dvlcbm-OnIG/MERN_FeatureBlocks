//Advanced MongoDB Operators
function quiz3(app, emp){

    app.get('/example1', async (req, res)=>{

        const item1 = await emp.find({

            salary: {$not: { $gt: 40000 }}
        })

        const item2 = await emp.find({

            department: {$nin: ['IT', 'Finance']}
        })

        const item3 = await emp.find({

            $nor:[
                {department: 'HR'},
                {salary: { $gt: 50000 }}
            ]
        })

        const item4 = await emp.find({

            age: {$exists: true}
        })

        const item5 = await emp.find({

            salary: {$type: 'number'}
        })

        const item6 = await emp.find({

            name: {$regex: '^C'}
            
        })

        const item7 = await emp.find({

            $and: [
                {department: { $ne: 'Marketing' }}, //or $nin for multiple value
                {salary: { $gte: 30000 }}
            ]
        })

        const item8 = await emp.find({

            name: {$regex: 'a', $options: 'i'}
        })

        const item9 = await emp.find({

            $and: [
                {department: {$nin: ['IT', 'Finance']}},
                {salary: {$not: {$gt: 40000 }}}
            ]
        })

        const item10 = await emp.find({

            name: {$regex: '^[AB]'}
        })
        //res.json(item1)
    })


}


module.exports = quiz3