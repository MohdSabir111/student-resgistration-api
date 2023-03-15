const express = require('express');
const nodemon = require('nodemon');
const router= express.Router();
const controller = require('../controllers/studentController')


 //  to create a new student 
router.post("/student",controller.creteStudent );

router.get("/student",controller.allStudent);


 // to get only one record of a student by id
  
 router.get("/student/:id",controller.singleStudent);

  
  // to update one record by id
  
router.patch("/student/:id",controller.UpdateStudent);

  // to delete the record by id
  
  router.delete("/student/:id",controller.deletedStudent);


module.exports = router;