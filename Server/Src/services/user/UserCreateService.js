const UserCreateService = async (Request, DataModel)=>{
    try{
        let PostBody = Request.body;
        const options = { wtimeout: 100000 }; // set timeout to 20 seconds
        let data = await DataModel.create(PostBody, options)
        return {status:"success", data:data}
    }
    catch(error){
        return {status:"fail", data:error.toString()}
    }
}
module.exports = UserCreateService