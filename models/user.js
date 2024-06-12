const mongoose =require("mongoose")
const schema =mongoose.Schema(
    
    {
        "name": String,
        "dob": String,
        "blood": String,
        "mobile": String,
        "address": String,
        "pin": String,
        "district": String,
        "place": String,
        "email": String,
        "username": String,
        "password": String        
    }
)

let usermodel=mongoose.model("users",schema);
module.exports={usermodel}