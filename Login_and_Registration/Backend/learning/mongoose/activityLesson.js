function activity(app, EmployeeModel){
    
    //first experiment - make a post on the collection "example1"

    //create method - put data in
    app.post('/example1', async (req, res)=>{
        const employ = await EmployeeModel.create(req.body)

        res.json(employ)
    })

    //find method - get data out
    app.get('/example1', async (req, res)=>{

        //without filter - get everything
        const noFilter = await EmployeeModel.find()

        //with filter
        const filter = await EmployeeModel.find({
            //only get the collections with the department: IT
            department: 'IT'
        })

        //findOne
        const fOne = await EmployeeModel.findOne({
            email: 'russel@example.com'
        })

        //greaterThan
        const getGt30k = await EmployeeModel.find({
            salary: { $gt: 30000}  //only returns bob and charlie
        })

        //lessThan
        const getLt35k = await EmployeeModel.find({
            salary: { $lt: 35000 } //only returns alice and russel
        })


        //output
        res.json(getLt35k)
    })

}

module.exports = activity