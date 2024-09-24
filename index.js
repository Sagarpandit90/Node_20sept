const express = require('express');
const app = express();
const path = require('path');
const connection = require('./connection');
connection();
const student = require('./routes/student');
app.use(student);


app.set('view engine' , 'ejs');
app.set('views',path.resolve('./views'));

app.listen(5000,(e)=>{
    if (e) {
        console.log(error);
        
    } else {
        console.log("mast chal raha hu ji");
        
    }
})