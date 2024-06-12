const express  =require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const {usermodel}=require("./models/user.js")

const app=express()
app.use(cors())
app.use(express.json())
 
mongoose.connect("mongodb+srv://marywinchakkunny:marywinchakkunny2001@cluster0.nuf6v.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let user=new usermodel(input)
    user.save()
    res.json({"status":"success"})
 
})

app.get("/view",(req,res)=>{

    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
}
)

app.listen(8080,()=>{
    console.log("Server started")
})