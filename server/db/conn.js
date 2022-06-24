const mongoose=require('mongoose');
const DB=process.env.MONGO_URL; 
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
