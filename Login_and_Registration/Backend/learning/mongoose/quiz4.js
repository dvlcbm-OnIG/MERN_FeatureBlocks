//Mongoose Query Methods
function quiz4(app, emp){

    app.get('/example1', async (req, res)=>{
        //Find all employees in IT, but return only their name and salary.
        const item1 = await emp
        .find({department: 'IT'})
        .select('name salary')
        
        //Find the 3 highest-paid employees.
        const item2 = await emp
            .find()
            .sort({salary: -1})  //descending order
            .limit(3)

        const item3 = await emp
            //Find the 2 youngest employees.
            .find()
            .sort({age: 1})
            .limit(2)

        const item4 = await emp
            //Find employees who earn at least 30,000, then arrange them from highest salary to lowest.
            .find({salary: {$gte: 30000}})
            .sort({salary: -1}) //decending order  

        const item5 = await emp
            //Find the highest-paid employee in Finance.
            .find({department: 'Finance'})
            .sort({salary: -1})
            .limit(1)

        const item6 = await emp
            //Find the third-highest-paid employee overall.
            .find()
            .sort({salary: -1})
            .skip(2)
            .limit(1)

        const item7 = await emp
            //Find employees between 20 and 30 years old, sort them from youngest to oldest, and return only the first 3.
            .find({
                $and: [
                    {age: {$gte: 20}},
                    {age: {$lte: 30}}
                ]
            })
            .sort({age: 1})
            .limit(3)
        //Find employees in Marketing or IT, sort them by salary from highest to lowest, and return only their name, department, and salary.
        const item8 = await emp
            .find({
                department: {$in: ["IT", "Marketing"]}
            })
            .sort({salary: -1})
            .select('name department salary')

        //Count how many employees earn more than 30,000.
        const item9 = await emp.countDocuments({
            salary: {$gt: 30000}
        })
            
        //Find employees who are not in IT, sort them by age from oldest to youngest, skip the oldest 2, and return the next 3 employees with only their name and age.
        const item10 = await emp
            .find({department: {$ne: 'IT'}})
            .sort({age: -1})
            .skip(2)
            .limit(3)
            .select('name age')

        res.json(item10)
    })
}

module.exports = quiz4