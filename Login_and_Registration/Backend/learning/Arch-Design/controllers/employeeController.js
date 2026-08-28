const empMod = require('../models/employee')




async function createEmployee(req, res){
    const {name, email, password, age, department, salary} = req.body;

    try{
       const employee = await empMod.create({
            name,
            email,
            password,
            age,
            department,
            salary
            //no need to add createdAt & updatedAt, timestamps handles it.
        })
        //201 - success create
        res.status(201).json({
            success: true,
            message: "Successfully submitted",
            createdAt: employee.createdAt
        })

    }catch{
        //500 - If it's an unexpected server/database error
        res.status(500).json({
            success: false,
            message: "Failed to create an employee"
        })
    }
}
async function getAllEmployees(req, res){


}
async function getOneEmployee(req, res){


}
async function updateEmployee(req, res){


}
async function deleteEmployee(req, res){


}

module.exports = createEmployee