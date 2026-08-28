const mongoose = require('mongoose');
const express = require('express');

const {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee
} = require('../controllers/employeeController');

const validateEmployee = require('../middleware/employeeValidation');

const router = express.Router();


router.post('/', validateEmployee, createEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getOneEmployee);
router.put('/:id', updateEmployee);

module.exports = router