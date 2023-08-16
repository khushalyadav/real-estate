const express=require('express');
const ConnectToMongo= require('./mongoose');
const app=express();
const port= process.env.PORT || 5000;
const path =require('path');

const cors=require('cors');
app.use(cors());
require('dotenv').config();

ConnectToMongo(process.env.MONGO_URI);
app.use(express.json());
//For adding or getting projects

app.use('/api',require('./routes/addProject'));
app.use('/auth',require('./routes/auth'));
app.use('/contact',require('./routes/contact'));


app.listen(port,()=>{
    console.log('Server Running at '+ port);
})