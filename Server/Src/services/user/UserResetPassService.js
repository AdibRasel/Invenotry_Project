const OTPSModel = require("../../models/Users/OTPSModel");

const UserResetPassService = async (Request, DataModel) => {
    let email = Request.body['email'];
    let OTPCode = Request.body["OTP"];
    let NewPass = Request.body["password"];
    let statusUpdate = "OTPChange";
    try{
        //First Database processc
        // let OTPUsedCount = (await OTPSModel.aggregate([{$match:{email:email, otp:OTPCode, status: statusUpdate}}, {$count:"total"}]))
        // let OTPUsedCount = (await OTPSModel.aggregate([{$match:{email:email, otp:OTPCode, status: statusUpdate}}, {$count:"total"}]))

        let OTPUsedCount = (await OTPSModel.aggregate([{$match:{email:email, otp:OTPCode, status: statusUpdate}}, {$count:"total"}]))
        // let OTPUsedCount = (await OTPSModel.aggregate([{$match:{email:email, otp:OTPCode, status: statusUpdate}}, {$count:"total"}]))
        

        
        if(OTPUsedCount.length>0){
            // Second processc
            let PassUpdate = await DataModel.updateOne({email:email}, {password: NewPass})
            

            return {status:"success", data:PassUpdate}
        }else{
            return {status:"fail in else block", data:"Invalid Request", aggregate: OTPUsedCount, email: email, otpcode: OTPCode}
        }
    }catch (error){
        return {status:"fail in catch block", data: error.toString(), aggregate: OTPUsedCount, email: email, otpcode: OTPCode }
    }
}
module.exports = UserResetPassService
