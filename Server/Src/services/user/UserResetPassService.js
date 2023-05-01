const OTPSModel = require("../../models/OTPSModel");

const UserResetPassService = async (Request, DataModel) => {
    let email = Request.body['email'];
    let OTPCode = Request.body["OTP"];
    let NewPass = Request.body["password"];
    let statusUpdate =1;
    try{
        //First Database processc
        let OTPUsedCount = await OTPSModel.aggregate([{$match: {email:email, otp:OTPCode, status: statusUpdate}}, {$count:"total"}])
        
        if(OTPUsedCount.length>0){
            // Second processc
            let PassUpdate = await DataModel.updateOne({email:email}, {password: NewPass})
            return {status:"success", data:PassUpdate}
        }else{
            return {status:"fail", data:"Invalid Request", aggregate: OTPUsedCount}
        }
    }catch (error){
        return {status:"fail", data: error.toString()}
    }
}
module.exports = UserResetPassService