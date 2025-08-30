const express=require("express");
const router=express.Router();


router.get("/", (req, res) => {
    res.status(200).send({ msg: "running..." })
})

// router.all('/*',(req ,res)=>{
//     res.status(400).send({status: false , message :"PATH INVALID !"})
// })
  
module.exports=router