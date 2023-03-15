const mongoose = require('mongoose');
const Student = require('../models/students')


 



 //  to create a new student 
module.exports.creteStudent= async (req, res) => {
    try{
  
      const data = await Student(req.body)
      const result = await data.save()
      console.log(result)
      res.send(result)
    }catch(error){
      return res.send(error)
    }
  };
  
  // to fetch all the records of students
module.exports.allStudent = async(req, res)=>{
    try{
      const allStudent = await Student.find()
      return res.send(allStudent);
    }catch(error){
     return res.send(error)
    }
  };
  
  // to get only one record of a student by id
  
module.exports.singleStudent = async(req, res)=>{
   try{
     const _id =req.params.id;
     const oneStudent= await Student.findById({_id});
      return res.send(oneStudent);
   }catch(error){
      return res.send(error)
   }
  
  };
  
  // to update one record by id
  
module.exports.UpdateStudent= async(req, res)=>{
      try {
          const _id =req.params.id;                                    
          const updateStudent = await Student.findByIdAndUpdate({_id :_id } , req.body,{ 
              new :true  // to show updated record in one hit
          } )
          return res.send(updateStudent);
      } catch (error) {
          return res.send(error)  
      }
  };
   
  // to delete the record by id
 module.exports.deletedStudent= async (req, res)=>{
    try {
  const _id = req.params.id;
      const deletedStudent = await Student.findByIdAndDelete({_id});
      return res.send(deletedStudent);
    } catch (error) {
      return res.send(error);
    }
  };