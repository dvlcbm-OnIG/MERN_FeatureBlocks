//Quiz 1 — MongoDB Query Operators
function quiz1(app, EmployeeModel){

    app.get('/example1', async (req, res)=>{

        const item1 = await EmployeeModel.find({
            salary: { $eq: 30000 } //salary exactly 30,000
        })

        const item2 = await EmployeeModel.find({
            department: {$ne: 'IT'}  //department is not IT
        })

        const item3 = await EmployeeModel.find({
            salary: {$gt: 30000 }  //salary greater than 30,000
        })

        const item4 = await EmployeeModel.find({
            salary: { $gte: 30000 }  //salary 30,000 or greater
        })

        const item5 = await EmployeeModel.find({
            salary: { $lt: 35000 }  //salary less than 35,000
        })

        const item6 = await EmployeeModel.find({
            salary: { $lte: 35000 }  //salary 35,000 or less
        })

        const item7 = await EmployeeModel.find({
            department: {$in: ["IT","HR"]}  //
        })

        const item8 = await EmployeeModel.find({
            department: { $nin: ['IT', 'HR']}  //department is either IT or HR
        })

        const item9 = await EmployeeModel.find({
            //department is IT and salary is greater than 30,000
            $and: [
                {department: 'IT'},
                {salary: { $gt: 30000 }}
            ]
        })

        const item10 = await EmployeeModel.find({
            //department is HR or salary is less than 30,000
            $or:[
                {department: 'HR'},
                {salary: { $lt: 30000}}
            ]
        })

        //show result on API
        res.json(item10)
    })
}

module.exports = quiz1