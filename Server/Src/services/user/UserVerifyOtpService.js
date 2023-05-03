const UserVerifyOTPService = async (Request, DataModel)=>{
    try{
        let email = Request.params.email;
        let OTPCode = Request.params.otp;
        let status= "OtpNotChange";
        let statusUpdate ="OTPChange";

        let OTPCount = (await DataModel.aggregate([{$match:{email:email, otp:OTPCode}}, {$count:"total"}]))

        if(OTPCount.length>0){
            let OTPUpdate = await DataModel.updateOne({email:email, otp:OTPCode, status:status}, {email:email, otp: OTPCode, status: statusUpdate})
            return {status:"success", data:OTPUpdate, aggregate: OTPCount}
        }else{
            return {status:"fail", data:"Invalid OTP Code", paramsTextEmail: email, paramsTextOTPCode: OTPCode, aggregate: OTPCount}
        }

    }catch(error){
        return {status:"fail", data: error.toString()}
    }
}
module.exports = UserVerifyOTPService