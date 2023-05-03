const OTPDataDelete = async (Request, DataModel)=>{
    try{
        let OTPDataModel = DataModel;
        let data = await OTPDataModel.deleteMany()
        return {status:"success", data:data}
    }
    catch(error){
        return {status:"fail", data:error.toString()}
    }
}
module.exports = OTPDataDelete