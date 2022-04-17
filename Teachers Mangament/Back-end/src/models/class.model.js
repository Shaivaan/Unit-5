const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
    subject:{type:String,required:true},
    grade:{type:String,required:true},
    section:{type:String,required:true},
    teacher_id:{type:mongoose.Schema.Types.ObjectId,ref:"teacher",required:true}
})

const Class = mongoose.model("class",classSchema);
module.exports = Class;