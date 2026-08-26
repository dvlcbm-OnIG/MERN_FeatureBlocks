const express = require('express');
const {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');
const validateEmployee = require('../middleware/employeeValidation');

const router = express.Router();

router.post('/', validateEmployee, createEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getOneEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

/*
router.post('/', async (req, res) => {

    app.post('/collection1', async (req, res) => {

    const { name, age, password } = req.body;

    // Name Validation
    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    // Password Validation
    if (password === undefined || (typeof password === "string" && password.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "Password is required"
        });
    }
    // Password Validation
    if (typeof password !== "string") {
        return res.status(400).json({
            success: false,
            message: "Password must be a string"
        });
    }

    // Age Validation
    if (age === undefined || age === null || (typeof age === "string" && age.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "Age is required"
        });
    }

    const newAge = Number(age);

    if (!Number.isInteger(newAge)) {
        return res.status(400).json({
            success: false,
            message: "Age must be a whole number"
        });
    }

    if (newAge < 1 || newAge > 120) {
        return res.status(400).json({
            success: false,
            message: "Age must be between 1 and 120"
        });
    }

    // Everything passed validation
    try {

        const employee = await empModel.create({
            name: name.trim(),
            age: newAge,
            password: password
        });

        res.status(201).json({
            success: true,
            message: "Successfully submitted"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
    
});
*/

module.exports = router;