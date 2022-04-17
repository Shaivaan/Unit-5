require("dotenv").config();
const jwt = require("jsonwebtoken");


const Admin = require("../models/admin.models");
const newToken = (admin)=>{
        return  jwt.sign({admin}, process.env.JWT_SECRET_KEY);
}

const register = async(req,res)=>{
    try{
     
        let admin = await Admin.findOne({email:req.body.email})
        if(admin){   
            return res.send({status:"Try with another Email and Password"});
        }
        
        admin = await Admin.create(req.body);
        console.log(admin);
         
         const token = newToken(admin);
         console.log(admin)
        
      return res.send({status:"Done"});

    }catch(err){
        res.send({status:"Not Done"});
    }
}

const login = async(req,res)=>{
    try{
        const admin = await Admin.findOne({email:req.body.email});
        if(!admin){
            return res.send({status:"Try with another Email and Password"});
        }
        console.log(admin)
        let match = admin.checkPassword(req.body.password);
        console.log(match)
        if(!match){
            return res.send({status:"Try with another Id and password"});
        }
        const token = newToken(admin);
        console.log(admin);
        res.send({status:"Done",admin,token});
    }catch(err){
        res.send(err.message);
    }
}
module.exports = {register,login};