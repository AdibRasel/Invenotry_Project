const CreateService = async (Request, DataModel) => {
    try{
        let PostBody = Request.body;
        PostBody.UserEmail = Request.headers['email']
        let data = await DataModel.create(PostBody)
        return {status:"Success", data:data}
    }catch(error){
        let PostBody = Request.body;
        PostBody.UserEmail = Request.headers['email']

        return {status:"fail catch block", data: error.toString(), request: PostBody}
    }
}
module.exports = CreateService