const express=require('express');
const mongoose=require('mongoose');
const app=express();
const DB="mongodb+srv://sohom:sohom@cluster0.w9vf65x.mongodb.net/mern1?retryWrites=true&w=majority";
mongoose.connect(DB,{
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