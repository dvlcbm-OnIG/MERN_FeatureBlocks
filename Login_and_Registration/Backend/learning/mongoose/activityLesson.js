function activity(app, EmployeeModel){
    
    //first experiment - make a post on the collection "example1"

    //create method - put data in
    app.post('/example1', async (req, res)=>{
        const employ = await EmployeeModel.create(req.body)

        res.json(employ)
    })

}

module.exports = activity