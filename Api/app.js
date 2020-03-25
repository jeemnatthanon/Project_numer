const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());

//routes
app.get('/',(req, res) => {

});
//Import Route
const bisection = require('./routes/bisection') //ตัวหน้าถูกเรียก
app.use('/bisection',bisection);

mongoose.connect('mongodb+srv//:natthanon:natthanon1997@cluster0-djarb.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,userMongoClient:true})
console.log('HI connected DB')