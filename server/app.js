const express=require('express');
const mongoose=require('mongoose');
const dotenv = require("dotenv");
const app=express();
dotenv.config();

const database=process.env.MONGO_URL; 
mongoose.connect(database,{
    useNewUrlParser:true,
    //useCatchIndex:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
}).then(()=>{
    console.log('connection seccessful');
}).catch((err)=>{
    console.log(err)
});
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

app.listen(3000,()=>{
    console.log("connected to 3000 port");
})  