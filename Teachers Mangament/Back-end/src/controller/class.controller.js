const express = require("express");
const router = express.Router();
const Class = require("../models/class.model");
router.post("",async(req,res)=>{
    try{
        const classs = await Class.create(req.body);
        res.send(classs);
    }catch(err){
        res.send(err);
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const classs = await Class.find({teacher_id:req.params.id}).lean().exec();
        res.send(classs);
    }catch(err){
        res.send(err);
    }
})


router.patch("/:id",async(req,res)=>{
    try{
        const classs = await Class.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(classs);
    }catch(err){
        res.send(err);
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const classs = await Class.findByIdAndDelete(req.params.id).lean().exec();
        res.send(classs);
    }catch(err){
        res.send(err);
    }
})

module.exports = router;