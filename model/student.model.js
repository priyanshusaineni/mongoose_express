const mongoose=require("mongoose");
// mongodb://localhost:27017

// mongoose.connect("mongodb://localhost:27017/StudentsDB")
//     .then(()=>{
//         console.log("Successful")
//     }).catch(err=>{
//         console.log("Error")
//     })


const studentSchema=mongoose.Schema({
    _id:{
        type:Number,
        required:true,
    },
    sname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const StudentModel=mongoose.model("student",studentSchema);

module.exports=StudentModel;