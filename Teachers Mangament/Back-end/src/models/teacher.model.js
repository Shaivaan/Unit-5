const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false
})

const Teacher = mongoose.model("teacher",teacherSchema);
module.exports = Teacher;