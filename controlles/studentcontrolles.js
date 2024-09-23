const Student = require('../models/Student');

async function addStudent(req,res){
    try {
        // console.log(req.body);
        const student = new Student (req.body);
        await student.save();
        res.render("studentInsert")
    } catch (error) {
        console.log(error);
    }
}

async function getStudents(req,res) {
    try {
        let students = await Student.find({});
        // res.send(students)
        res.render("studentList",{students:students});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    addStudent,
    getStudents
}