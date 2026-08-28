const empModel = require('../models/employee');

//CREATE
async function createEmployee(req, res) {
	const { name, age, password } = req.body;

	try {
		await empModel.create({ 
			name: name.trim(), 
			age: Number(age), 
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
}


//GET all
async function getAllEmployees(req, res) {
	try {
		const users = await empModel
			.find()
			.select('name age');

		res.json(users);

	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Internal server errors"
		});
	}
}


//GET one
async function getOneEmployee(req, res) {
	try {
		const user = await empModel
			.findById(req.params.id)
			.select('name age');

		if (!user){
			return res.status(404).json({
				success: false,
				message: "User not found"
			});
		}
		res.json(user);

	} catch (err) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}


//UPDATE one
async function updateEmployee(req, res) {
	try {
		const user = await empModel.findByIdAndUpdate(
			req.params.id, //filter
			req.body,	//update
			{ new: true, runValidators: true }// runvalidators - “Before saving the update, validate the new values against the schema rules.”
		);

		if (!user){
			return res.status(404).json({ 
				success: false,
				message: "User not found"
			});
		}
		res.json(user);

	} catch (err) {
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}


//DELETE one
async function deleteEmployee(req, res) {
	try {
		const deletedUser = await empModel.findByIdAndDelete(
			req.params.id
		);

		if (!deletedUser){
			return res.status(404).json({ 
				success: false,
				message: "User not found" 
			});
		}

		res.json({ 
			success: true, 
			message: "User deleted successfully"
		 });

		console.log('removed', deletedUser);

	} catch (err) {
		console.error(err);
		res.status(500).json({
			success: false,
			message: "Internal server error"
		});
	}
}

module.exports = { createEmployee, getAllEmployees, getOneEmployee, updateEmployee, deleteEmployee };
