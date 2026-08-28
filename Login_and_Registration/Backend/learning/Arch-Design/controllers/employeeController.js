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
        res.status(201).json([
            {
            success: true,
            message: "Successfully submitted",
            createdAt: employee.createdAt
            },
            {
             employee: req.body
            }
        ])

    }catch(err){
        // MongoDB duplicate key error (e.g., duplicate email)
        if(err.code === 11000){
            //409 - email already exist/duplication
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            })
        }
        //500 - If it's an unexpected server/database error
        res.status(500).json({
            success: false,
            message: "Failed to create an employee"
        })
    }
}
async function getAllEmployees(req, res){

    try{
        const employees = await empMod.find();
        res.status(200).json(employees)
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to fetch employees"
        })
    }
}
async function getOneEmployee(req, res){


}
async function updateEmployee(req, res){


}
async function deleteEmployee(req, res){


}

module.exports = { createEmployee, getAllEmployees}