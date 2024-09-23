const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    rollNo: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fatherName: { type: String, required: true },
    adharCardNo: { type: String, required: true },
    mobileNo: { type: String, required: true },
});


module.exports = mongoose.model('Student',StudentSchema);