const express = require('express');
const router = express.Router();

const studentcontroller = require('../controlles/studentcontrolles')


router.use(express.json());
router.use(express.urlencoded({extended:false}));
router.get('/',(req,res)=>{
    res.render('home');
});

router.post('/add/student',(req,res)=>{
    studentcontroller.addStudent(req,res);
})

router.get('/students',(req,res)=>{
    studentcontroller.getStudents(req,res)
})

// find student
router.get('/edit/student/page/:id',(req,res)=>{
    studentcontroller.getStudentForEdit(req,res);
})

// update
router.post('/update/student/:id',(req,res)=>{
    studentcontroller.updateStudent(req,res);
})

// delete
router.get('/delete/student/:id',(req,res)=>{
    studentcontroller.deleteStudent(req,res);
})
module.exports = router;

