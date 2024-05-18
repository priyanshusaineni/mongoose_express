const express=require("express");
const mongoose=require("mongoose");
const studentRoute=require("./routes/students.route");

const studentModel=require("./model/student.model")
mongoose.connect("mongodb://localhost:27017/StudentsDB")
    .then(()=>{
        console.log("Successful")
    }).catch(err=>{
        console.log("Error")
    })

const app=express();
require("dotenv").config()

const port=process.env.PORT;
app.use("/api/students",studentRoute);


app.get("/",(req,res)=>{
    res.status(200).send("Home Page")
})

app.listen(port,console.log("Server running"));