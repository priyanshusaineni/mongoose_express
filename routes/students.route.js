const express=require("express");
const router=express.Router();
const studentModel=require("../model/student.model")
router.use(express.json())
const {getAllStudents,getSpecificStudent,addNewStudent,deleteStudent,updateStudent,updateGroupStudentsAge}=require("../controller/student.controller")


router.get("/",getAllStudents)

router.get("/:id",getSpecificStudent)

router.post("/",addNewStudent)
router.put("/",updateGroupStudentsAge)  //set it for various other fields present in collection


router.delete("/:id",deleteStudent)

router.put("/:id",updateStudent)
module.exports=router;