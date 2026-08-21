const DateTime = require('./DateTime')

function quiz5(app, emp){

    app.post('/example1', async(req, res)=>{

        const item1 = await emp.create({
            name: "Jack",
            age: 27,
            department: "IT",
            salary: 34000,
            startTime: DateTime()
        })

        const item2 = await emp.insertMany([
            {
                name: "Kate",
                department: "HR",
                salary: 38000,
                startTime: DateTime()
            },
            {
                name: "Liam",
                department: "Design",
                salary: 31000,
                startTime: DateTime()
            }
        ])

        const item3 = new emp({
            name: "Mike",
            age: 26,
            department: "Finance",
            salary: 42000,
            startTime: DateTime()
        })
        await item3.save()

        const item4 = new emp({
            name: "Nina",
            age: 20,
            department: "Marketing",
            salary: 27000,
            startTime: DateTime()
        })
        await item4.save()

        const item5 = await emp.insertMany([
            {
                name: "Oscar",
                age: 31,
                department: "IT",
                salary: 48000,
                startTime: DateTime()
            },
            {
                name: "Paula",
                age: 22,
                department: "Finance",
                salary: 29000,
                startTime: DateTime()
            },
            {
                name: "Quinn",
                age: 28,
                department: "HR",
                salary: 36000,
                startTime: DateTime()
            }
        ])
        // Item 6
        const item6 = await emp.create({
            name: "Ryan",
            age: 30,
            department: "Finance",
            salary: 50000,
            startTime: DateTime()
        })

        // Item 7
        const item7a = await emp.create({
            name: "Sara",
            age: 24,
            department: "IT",
            salary: 33000,
            startTime: DateTime()
        })

        const item7b = await emp.create({
            name: "Tom",
            age: 29,
            department: "HR",
            salary: 41000,
            startTime: DateTime()
        })

        // Item 8
        const item8 = new emp({
            name: "Victor",
            age: 26,
            department: "Design",
            salary: 37000,
            startTime: DateTime()
        })

        await item8.save()

        // Item 9
        const item9 = await emp.insertMany([
            {
                name: "Wendy",
                age: 21,
                department: "Marketing",
                salary: 26000,
                startTime: DateTime()
            },
            {
                name: "Xavier",
                age: 32,
                department: "Finance",
                salary: 52000,
                startTime: DateTime()
            },      
            {
                name: "Yara",
                age: 27,
                department: "IT",
                salary: 39000,
                startTime: DateTime()
            }
        ])

        // Item 10
        const item10 = new emp({
            name: "Zack",
            age: 25,
            department: "HR",
            salary: 30000,
            startTime: DateTime()
        })

        item10.salary = 35000

        await item10.save()
        //3 4 8 10
        res.json(item1, item2, item4, item5, item6, item7a, item7b, item9)
    })
}

module.exports = quiz5