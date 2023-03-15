const mongoose= require('mongoose');
const validator= require('validator');

let studentSchema= new mongoose.Schema({
    name: {
        type : String,
        required : "name is requred",
    },
    email : {
        type : String, 
        required : 'email is required',
        unique : [true, 'email is already exist'],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },

phone : {
    type : Number,
    required : 'phone is required',
  
},
address : {
    type : String,
    required : true
}
});


// creating the models (collection)

const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;