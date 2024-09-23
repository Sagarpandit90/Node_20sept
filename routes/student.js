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

module.exports = router;

