function validateCreateEmployee(req, res, next){
    const {name, email, password, age, department, salary} = req.body;

    //name validation - !string, ""/empty/whitespaces
    if(typeof name !== "string" || name.trim() === ""){
        //400 - bad request
        return res.status(400).json({
            success: false,
            message: "Name is required"
        })
    }


    //email validation
    if(typeof email !== 'string' || email.trim() === ""){
        return res.status(400).json({
            success: false,
            message: "Email is required"
        })
    }
    //Does it have a valid email format?
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu)$/i;; 

    if(!emailRegex.test(email.trim())){
        return res.status(400).json({
            success: false,
            message: "Invalid email format"
        })
    }


    //password validation 
    //check for undefined and empty spaces
    if(typeof password !== "string" || password.trim() === ""){
        return res.status(400).json({
            success: false,
            message: "Password is required"
        })
    }
   

    //age validation
    //check if exist
    if (age === undefined || age === null || (typeof age === "string" && age.trim() === "")) {

		return res.status(400).json({
             success: false, 
             message: "Age is required"
        });
	}

    const newAge = Number(age) //turn it to number/int
    //check if newAge is not a wholeNumber
    if(!Number.isInteger(newAge)){
		return res.status(400).json({
            success: false,
            message: "Age must be a whole number"
        });
    }

    //age should only range from 18-65
    if(newAge < 18 || newAge > 65){
        return res.status(400).json({
            success: false,
            message: "Age should only range from 18-65"
        })
    }

    //department validation
    
    if(typeof department !== 'string' || department.trim() === ""){
        //400 - bad request
        return res.status(400).json({
            success: false,
            message: "Department is required"
        })
    }


    //salary validation
    if(typeof salary !== 'number'){
		return res.status(400).json({
            success: false,
            message: "Salary must be a number"
        });
    }


    //normalize
    req.body.name = name.trim();
    req.body.email = email.trim().toLowerCase();
    req.body.department = department.trim()
    req.body.age = newAge


    next()
};

function validateUpdateEmployee(req, res, next){
    const {name, email, password, age, department, salary} = req.body;

    //name validation - !string, ""/empty/whitespaces
    if(name !== undefined){
        if(typeof name !== "string" || name.trim() === ""){
            return res.status(400).json({
                success: false,
                message: "Name is required"
            })
        }
        req.body.name = name.trim();
    }

    //email validation
    if(email !== undefined){
        if(typeof email !== 'string' || email.trim() === ""){
            return res.status(400).json({
                success: false,
                message: "Email is required"
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu)$/i;;

        if(!emailRegex.test(email.trim())){
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            })
        }

        req.body.email = email.trim().toLowerCase();
    }

    //password validation 
    //check for undefined and empty spaces
    if(password !== undefined){
        if(typeof password !== "string" || password.trim() === ""){
            return res.status(400).json({
                success: false,
                message: "Password is required"
            })
        }
        req.body.password = password.trim();
    }

    //age validation
    if(age !== undefined){
        if (age === undefined || age === null || (typeof age === "string" && age.trim() === "")) {
            return res.status(400).json({
                success: false,
                message: "Age is required"
            });
        }

        const newAge = Number(age)

        if(!Number.isInteger(newAge)){
            return res.status(400).json({
                success: false,
                message: "Age must be a whole number"
            });
        }

        if(newAge < 18 || newAge > 65){
            return res.status(400).json({
                success: false,
                message: "Age should only range from 18-65"
            })
        }

        req.body.age = newAge
    }

    //department validation
    if(department !== undefined){
        if(typeof department !== 'string' || department.trim() === ""){
            return res.status(400).json({
                success: false,
                message: "Department is required"
            })
        }
        req.body.department = department.trim()
    }

    //salary validation
    if(salary !== undefined){
        if(typeof salary !== 'number'){
            return res.status(400).json({
                success: false,
                message: "Salary must be a number"
            });
        }
    }

    next()
}

module.exports = {
    validateCreateEmployee,
    validateUpdateEmployee
} 




































