const express=require('express');
const mongoose=require('mongoose');
const dotenv = require("dotenv");
const app=express();
dotenv.config();

require('./db/conn');
const port=process.env.PORT; 

app.get('/',(req,res)=>{
    res.send('hello world');
});
app.get('/about',(req,res)=>{
    res.send('this is about page');
});
app.get('/contact',(req,res)=>{
    res.send('this is contact page');
});
app.get('/login',(req,res)=>{
    res.send('this is login page');
});
app.get('/register',(req,res)=>{
    res.send('this is registers page');
});

app.listen(port,()=>{
    console.log(`connected to  ${port}`);
})  