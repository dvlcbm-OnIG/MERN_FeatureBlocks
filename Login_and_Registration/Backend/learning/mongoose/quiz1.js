function quiz1(app, EmployeeModel){


    app.get('/example1', async (req, res)=>{

        const first = await EmployeeModel.find({
            salary: { $eq: 25000 }
        })
    
        res.json(first)
    })
}

module.exports = quiz1