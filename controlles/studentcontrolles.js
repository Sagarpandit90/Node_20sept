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

async function getStudentForEdit(req,res) {
    try {
        let id = req.params.id;
        console.log(id);
        
        let student = await Student.findOne({_id: id});
        res.render("studentforupdate",{student:student});
        
        // let updatedStudent = await new student.updateOne(req.body);
        // await updatedStudent.save();
    } catch (error) {
        console.log(error);        
    }
}

async function updateStudent(req,res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        student.rollNo      = req.body.rollNo;
        student.fastName    = req.body.fastName;
        student.lastName    = req.body.lastName;
        student.fatherName  = req.body.fatherName;
        student.adharCardNo = req.body.adharCardNo
        student.mobileNo    = req.body.mobileNo;
        console.log(student);
        await student.save();
        let students = await Student.find({});
        res.render("studentList",{students:students});
    } catch (error) {
        console.log(error);
    }
}

async function deleteStudent(req,res){
    let id = req.params.id;
    await Student.deleteOne({_id:id});
    let students = await Student.find({});
    res.render("studentList",{students:students});
}
module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit,
    updateStudent,
    deleteStudent,
}