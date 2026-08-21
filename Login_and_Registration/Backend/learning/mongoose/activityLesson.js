const DateTime = require('./quizzes/DateTime')
function activity(app, EmployeeModel){
    
    //first experiment - make a post on the collection "example1"

    //create method - put data in
    app.post('/example1', async (req, res)=>{
        //const employ = await EmployeeModel.create(req.body)
        const employ = await EmployeeModel.insertMany(
            [
  {
    _id: "6a8292e1893b08a2191fe390",
    name: "Russel",
    email: "russel@example.com",
    password: "123456",
    age: 19,
    department: "IT",
    salary: 25000,
    startTime: DateTime()
  },
  {
    _id: "6a8293a5893b08a2191fe391",
    name: "Alice",
    age: 22,
    department: "IT",
    salary: 30000,
    startTime: DateTime()
  },
  {
    _id: "6a8293a5893b08a2191fe392",
    name: "Bob",
    age: 30,
    department: "HR",
    salary: 40000,
    startTime: DateTime()
  },
  {
    _id: "6a8293a5893b08a2191fe393",
    name: "Charlie",
    age: 25,
    department: "IT",
    salary: 35000,
    startTime: DateTime()
  },
  {
    _id: "6a83adbbef9f361adf06bb56",
    name: "Duke",
    age: 23,
    department: "CE",
    salary: 20000,
    startTime: DateTime()
  },
  {
    _id: "6a83d9fbd8332f33c760376b",
    name: "Ethan",
    email: "ethan@example.com",
    password: "123456",
    age: 28,
    department: "Finance",
    salary: 45000,
    startTime: DateTime()
  },
  {
    _id: "6a83d9fbd8332f33c760376e",
    name: "Hannah",
    email: "hannah@example.com",
    password: "123456",
    age: 26,
    department: "Design",
    salary: 32000,
    startTime: DateTime()
  },
  {
    _id: "6a83d9fbd8332f33c760376f",
    name: "Ivan",
    email: "ivan@example.com",
    password: "123456",
    age: 24,
    department: "Marketing",
    salary: 30000,
    startTime: DateTime()
  },
  {
    _id: "6a83d9fbd8332f33c760376c",
    name: "Fiona",
    email: "fiona@example.com",
    password: "123456",
    age: 21,
    department: "Marketing",
    salary: 28000,
    startTime: DateTime()
  },
  {
    _id: "6a83d9fbd8332f33c760376d",
    name: "George",
    email: "george@example.com",
    password: "123456",
    age: 35,
    department: "Finance",
    salary: 55000,
    startTime: DateTime()
  }
]
        )
        res.json(employ)
    })

}

module.exports = activity