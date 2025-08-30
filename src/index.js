require("dotenv").config();
const express=require("express");
const app=express();
const route=require("./routes/route")

app.use(express.json());

app.use("/",route)

app.listen(process.env.PORT,(err)=>{
    if(err) return console.log(err.message);
    console.log(`server is running on port ${process.env.PORT}`);
})