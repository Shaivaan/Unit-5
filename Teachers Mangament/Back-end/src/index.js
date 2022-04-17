require("dotenv").config({ path: "../.env" });  
const express = require("express");
const  connect  = require("./configs/db");
const app = express();
const {body,validationResult} = require("express-validator");
module.exports = validationResult;
const teacherController = require("./controller/teacher.controller");
const classController = require("./controller/class.controller");


app.use(express.json());
const {register,login} = require("./controller/auth.controller");

app.post("/register",register);
app.post("/login",login);

app.use("/teacher",teacherController);
app.use("/class",classController);

const port = process.env.PORT || 3003
app.listen(port,async()=>{
    try{
        await connect();
        console.log("started");
    }catch(err){
        console.log(err);
    }
})