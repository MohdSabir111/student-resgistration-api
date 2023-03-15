const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/student-api").then(()=>{
       console.log('connection is successful');
      }).catch((e)=>{
    console.log('no connection');
});


// async function connection(){
//     try{
//        await  mongoose.connect('mongodb://localhost:27017/student-api');
//          console.log("db is connected successfulllly")
//     }
//     catch(error){
//         console.log(error);

//     }
// }
// const db= connection();
// module.exports=db;