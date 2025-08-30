const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    qualification:{
        type: [String],
        required:true
    },
    favSub:{
        type:String,
        default:"No Subject"
    },
    isAproved:{
        type:Boolean,
        default:false
    },
    adminType:{
        type:String,
        enum: ["admin","superAdmin"],
        default:"admin",
    },
    otp:{
        type:Number,
    },
    
}
)

module.exports = mongoose.model('Admins', AdminSchema)