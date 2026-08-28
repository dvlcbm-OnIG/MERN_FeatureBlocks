function validateEmployee(req, res, next) {
	const { name, age, password } = req.body;

	//name validation
	if (typeof name !== "string" || name.trim() === "") {

		return res.status(400).json({ success: false, message: "Name is required" });
	}

	//password validation
	if (password === undefined || (typeof password === "string" && password.trim() === "")) {

		return res.status(400).json({ success: false, message: "Password is required" });
	}

	if (typeof password !== "string") {

		return res.status(400).json({ success: false, message: "Password must be a string" });
	}


	//age validation
	if (age === undefined || age === null || (typeof age === "string" && age.trim() === "")) {

		return res.status(400).json({ success: false, message: "Age is required" });
	}


	const newAge = Number(age);
	if (!Number.isInteger(newAge)) {

		return res.status(400).json({ success: false, message: "Age must be a whole number" });
	}
	
	if (newAge < 1 || newAge > 120) {

		return res.status(400).json({ success: false, message: "Age must be between 1 and 120" });
	}

	// Normalize the data
    // req.body.name = name.trim();
    // req.body.age = newAge;
	
	// Continue to the next middleware when all employee data is valid.
	next();
}

module.exports = validateEmployee;
