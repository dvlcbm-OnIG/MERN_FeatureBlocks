function quiz2(app, Emp){
    
    app.get('/example1', async (req, res)=>{

        const item1 = await Emp.find({
            age: { $gte: 25 }   //Find employees who are at least 25 years old.
        })

        const item2 = await Emp.find({
            //Find employees who are under 25 years old AND earn less than 30,000.
            $and: [
                {age: {$lt: 25}},
                {salary: {$lt: 30000}}
            ]
        })

        const item3 = await Emp.find({
            //Find employees who work in either Finance or Marketing.
            department: {$in: ['Finance', 'Marketing']}  
        })

        const item4 = await Emp.find({
            //Find employees who are not in IT AND earn at least 30,000.
            $and: [
                {department: { $nin: ['IT'] }},
                {salary: {$gte: 30000 }}
            ]
        })

        const item5 = await Emp.find({
            //Find employees who are between 20 and 30 years old, inclusive.
            $and: [
                {age: {$lte: 30}},
                {age: {$gte: 20}}
            ]
        })

        const item6 = await Emp.find({
            //Find employees who are older than 25 AND earn more than 40,000.
            $and: [
                {age: {$gt: 25}},
                {salary: {$gt: 40000}}
            ]
        })

        const item7 = await Emp.find({
            //Find employees who are in IT OR Finance, but their salary must be at least 35,000.
            $and: [
                { department: {$in: ['IT', 'Finance']} },
                { salary: {$gte: 35000} }
            ]
        })
        
        const item8 = await Emp.find({
            //Find employees whose department is not Finance, HR, or IT.
            department: { $nin: ['IT', 'HR', 'Finance'] }
        })

        const item9 = await Emp.find({
            //Find employees who are younger than 25 OR earn more than 50,000.
            $or: [
                { age: {$lt: 25} },
                { salary: {$gt: 50000} }
            ]
        })

        const item10 = await Emp.find({
            //Find employees who are not in Marketing AND are at least 25 years old AND earn less than 40,000.
            $and: [
                { department: {$nin: ['Marketing']} },
                { age: {$gte: 25} },
                { salary: {$lt: 40000} }
            ]
        })

        //result output
        res.json(item10)
    })
}

module.exports = quiz2