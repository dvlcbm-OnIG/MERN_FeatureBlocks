const express = require('express');
const bcrypt = require('bcrypt')  //for hashed passwords
const app = express();

app.use(express.json())



const users = [];
/*
[
	{
  		"name": "russel",
  		"password": "12345"
	},
	{
  		"name": "almar",
  		"password": "12345"
	},
	{
  		"name": "aedan",
  		"password": "12345"
	}
]
*/



app.get('/users', (req, res) => {
	res.json(users);
});

app.post('/users', async (req, res) => {

	try{
		//const salt = await bcrypt.genSalt()
		const hashedPass = await bcrypt.hash(req.body.password, 10)
		console.log(hashedPass)

		const {name, password} = req.body
		users.push({
			name: name,
			password: hashedPass
		})
		res.status(200).json(users)
	}catch(error){
		console.log(error.message)
	}
	
});

app.post('/users/login', async (req, res) => {
	const user = users.find(user => user.name == req.body.name)
	if(user == null){
		return res.status(400).json(`user ${req.body.name} doesn't exist`)
	}

	try{
		const userPass = await bcrypt.compare(req.body.password, user.password)
		if(userPass) {
			res.json('success')
		}else{
			res.json("incorrect password")
		}
		
	}catch(error){
		console.log(error.message)
	}
	
});



app.listen(3000, () => {
	console.log(`Server listening on port 3000`);
});
