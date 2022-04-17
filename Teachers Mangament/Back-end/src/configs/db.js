const mongoose = require("mongoose");
require("dotenv").config({ path: "../../.env" });   
const connect = ()=>{
    mongoose.connect(
       process.env.MONGOURL
    )
}

module.exports = connect;