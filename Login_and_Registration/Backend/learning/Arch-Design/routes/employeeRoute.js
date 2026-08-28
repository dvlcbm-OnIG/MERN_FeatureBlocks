const mongoose = require('mongoose');
const express = require('express');

const {
    createEmployee,
    getAllEmployees
} = require('../controllers/employeeController');

const validateEmployee = require('../middleware/employeeValidation');

const router = express.Router();


router.post('/', validateEmployee, createEmployee);
router.get('/', getAllEmployees);

module.exports = router