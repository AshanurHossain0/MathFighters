require("dotenv").config();
const express=require("express");
const app=express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({ msg: "running..." })
})

app.listen(process.env.PORT,(err)=>{
    if(err) return console.log(err.message);
    console.log(`server is running on port ${process.env.PORT}`);
})