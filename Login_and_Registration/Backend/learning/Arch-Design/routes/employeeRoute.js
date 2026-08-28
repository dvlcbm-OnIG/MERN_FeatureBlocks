const mongoose = require('mongoose');
const express = require('express');

const createEmployee = require('../controllers/employeeController');
const validateEmployee = require('../middleware/employeeValidation')

const router = express.Router();


router.post('/', validateEmployee, createEmployee)


module.exports = router