const mongoose = require('mongoose');
const express = require('express');

const {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');

const {
    validateCreateEmployee,
    validateUpdateEmployee
} = require('../middleware/employeeValidation');

const router = express.Router();


router.post('/', validateCreateEmployee, createEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getOneEmployee);
router.put('/:id', validateUpdateEmployee, updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router