const studentModel=require("../model/student.model")

async function getAllStudents(req,res){                         //  /api/students
    let students=await studentModel.find({});
    if(students){
        res.status(200).send(students)
        return;
    }
}

async function getSpecificStudent(req,res){
    let {id}=req.params;
    let student=await studentModel.findById(id);
    if(student){
        res.status(200).json(student)
        return;
    }
    else{
        res.status(404).json({"message":"Student not found"})
    }
}
async function addNewStudent(req,res){
    // console.log(req.body);
    // const student=Object.assign(req.body)
    // console.log(student)
    let {id,sname,age,email}=req.body;
    // let student= await studentModel.create({
    //     _id:parseInt(id),
    //     sname,
    //     age:parseInt(age)
    //     ,email
    // }) 
    console.log(id)
    let student=await studentModel.create({
        _id:parseInt(req.body._id),
        sname:req.body.sname,
        age:parseInt(req.body.age),
        email:req.body.email
    })
    console.log(student)
    res.send(student)
}

async function deleteStudent(req,res){
    let {id}=req.params;
    let student=await studentModel.findByIdAndDelete(id);
    if(!student){
        res.status(404).json({"message":"Student not found to delete"})
        return;
    }
    res.status(200).json(student)
}

async function updateStudent(req,res){
    let {id}=req.params;
    let student=await studentModel.findByIdAndUpdate(id,req.body);
    if(!student){
        res.status(404).json({"message":"Student not found to delete"})
        return;
    }
    res.status(200).json({"message":"Student updated"})
}

async function updateGroupStudentsAge(req,res){
    console.log(req.body)
    let    {old_age,new_age}=req.body;
    let students=await studentModel.updateMany({age:old_age},{$set:{age:new_age}});
    // let students=await studentModel.updateMany({age:req.body.old_age},{$set:{age:new_age}});
    res.json(students)
}
module.exports ={getAllStudents,getSpecificStudent,addNewStudent,deleteStudent,updateStudent,updateGroupStudentsAge}