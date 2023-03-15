const { response, Router } = require('express');
const express = require('express')
const app = express();
require('./db/db');
const Student = require('./models/students');
const studentRouter = require('./routes/studentRouters');

const Port = process.env.Port || 8000;

app.use(express.json());//to parse incoming request in json

app.use(studentRouter);



 


app.listen(Port, () => {
    console.log(`server is runnig at ${Port}`)
})