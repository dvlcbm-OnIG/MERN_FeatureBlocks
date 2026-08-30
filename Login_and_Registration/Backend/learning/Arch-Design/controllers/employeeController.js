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
            message: "Successfully created",
            createdAt: employee.createdAt,
            employee: employee
        })

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
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}
async function getAllEmployees(req, res){

    try{
        const employees = await empMod.find();
        //200 - OK
        res.status(200).json(employees)
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch employees"
        })
    }
}
async function getOneEmployee(req, res){
    try{
        const employee = await empMod
            .findById(req.params.id)
            
        if(!employee){
            return res.status(404).json({
                success: false,
                message: "Employee doesn't exist"
            })
        }
        res.status(200).json(employee)
    }catch{
        res.status(500).json({
            success: false,
            message: "Failed to fetch employee"
        })
    }
}
async function updateEmployee(req, res){
    try{
        const employee = await empMod.findByIdAndUpdate(
            req.params.id,  //filter
            req.body,       //update
            {
               // new: true,    //“return the updated document,”
                returnDocument: "after",   //and Mongoose is telling you that in newer versions, this is deprecated in favor of  returnDocument
                runValidators: true //runValidators - “Before saving the update, validate the new values against the schema rules.”
            }
        )
        if(!employee){
             return res.status(404).json({
                success: false,
                message: "Employee not found"
             })   
            }
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            updatedAt: new Date(employee.updatedAt).toLocaleString(),
            employee: req.body
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
async function deleteEmployee(req, res){
    try{
        const employee = await empMod.findByIdAndDelete(
            req.params.id
        )

        if(!employee){
            return res.status(404).json({
                success: false,
                message: "Employee doesn't exist"
            })
        }
        res.status(200).json({
            success: true,
            message: "Employee successfully deleted"
        })
    }catch{
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { createEmployee, getAllEmployees, getOneEmployee, updateEmployee, deleteEmployee}