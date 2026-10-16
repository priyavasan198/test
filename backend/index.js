const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
require('dotenv').config()//importing env file
const app=express();
//const PORT=5000;
const PORT=process.env.PORT
app.listen(PORT);//to initialize the port
app.use(cors())
console.log(process.env.NAME)
app.get('/user',(req,res)=>{
    res.send("app is working")
})
mongoose.connect(process.env.MONGO_URI) //mongodb connect
.then((res)=>console.log("connected")) //for success
.catch((error)=>{console.log(error)})  //for failure
app.get('/weather',(req,res)=>{
    res.json([{
        city:"covai",
        temp:42,
        rain:false

    }])
})