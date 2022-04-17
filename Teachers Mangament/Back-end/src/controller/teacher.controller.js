const express = require("express");
const router = express.Router();
const Teacher = require("../models/teacher.model")
router.get("/",async(req,res)=>{
    try{
        const teacher = await Teacher.find().lean().exec();
        res.send(teacher);
    }catch(err){
        res.send(err);
    }
})


router.get("/agefilter",async(req,res)=>{
    try{
        const teacher = await Teacher.find().sort({ age: 1},).lean().exec();
        res.send(teacher);
    }catch(err){
        res.send(err);
    }
})

router.get("/male",async(req,res)=>{
    try{
        const teacher = await Teacher.find({gender:"Male"}).lean().exec();
        res.send(teacher);
    }catch(err){
        res.send(err);
    }
})

router.get("/female",async(req,res)=>{
    try{
        const teacher = await Teacher.find({gender:"Female"}).lean().exec();
        res.send(teacher);
    }catch(err){
        res.send(err);
    }
})


module.exports = router;