const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
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
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true
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
    userType:{
        type:String,
        default:"Student",
        enum:["Student","Employed","Unemployed"]
    },
    institution:{
        type:String,
        trim:true
    },
    otp:{
        type:Number,
    },
    
}
)

module.exports = mongoose.model('Users', UserSchema)