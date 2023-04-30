const mongoose = require("mongoose")
const OPTSchema=mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type:String, default:0},
    createDate:{type:String, default:Date.now()}
},{versionKey:false});
const OTPSModel = mongoose.model("otps", OPTSchema);
module.exports=OTPSModel