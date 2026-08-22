function quiz7(app, emp){

    app.delete('/example1', async (req, res)=>{

        // Item 1
        // Remove Duke from the database.
        await emp.deleteOne({
            name: "Duke"
        })


        // Item 2
        // Remove all employees currently in the Design department.
        await emp.deleteMany({
            department: 'Design'
        })


        // Item 3
        // An employee's email is provided:
        // ethan@example.com
        // Find that employee, delete them, and return the deleted employee in the response.
        const item3 = await emp.findOneAndDelete({
            email: 'ethan@example.com'
        })


        // Item 4
        // An admin provides an employee's _id:
        // 6a83d9fbd8332f33c760376f
        // Delete that employee using the method specifically designed for _id, and return the deleted document.
        const item4 = await emp.findByIdAndDelete(
            '6a83d9fbd8332f33c760376f'
        )


        // Item 5
        // skips redundant problem


        // Item 6
        // Delete one employee whose salary is below 25,000.
        // no employee earns below 25k so i changed this one
        await emp.deleteOne(
            { salary: { $lt: 33000 } }
        )


        // Item 7
        // The company wants to remove one Marketing employee who earns exactly ₱52,000,
        // and the API must return the employee that was actually removed.
        const item7 = await emp.findOneAndDelete({
            department: 'Marketing',
            salary: { $eq: 52000 }
        })


        // Item 8
        // An employee with this email should be removed:
        // fiona@example.com
        // But the API should return:
        // "Employee not found"
        // if no matching employee exists.
        const item8 = await emp.findOneAndDelete({
            email: 'fiona@example.com'
        })

        // if(item8){
        //     res.json(item8)
        // }else{
        //     res.json({message: 'Employee not found'})
        // }


        // Item 9
        // Delete every employee whose salary is below 30,000.
        // redundant, just more than one employee


        // Item 10
        // An administrator gives you an employee's _id.
        // You need to:
        // 1. Delete that employee.
        // 2. Return the deleted employee if they existed.
        // 3. Return "Employee not found" if the ID doesn't exist.
        // Use the most appropriate delete method.
        const item10 = await emp.findByIdAndDelete(
            '6a8821813a58fb792f5f5332'
        )

        if(item10){
            res.json(item10)
        }else{
            res.json('Employee not found')
        }

    })
}

module.exports = quiz7


// deleteOne() → delete one matching document
// deleteMany() → delete all matching documents
// findOneAndDelete() → find one + delete it + return the deleted document
// findByIdAndDelete() → find by _id + delete it + return the deleted document