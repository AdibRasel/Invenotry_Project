const CreateParentChildsService = async (Request, ParentModel, ChildsModel, JoinPropertyName) => {
    try{

        //Parent Creation
        let Parent = Request.body['Parent'];
        Parent.UserEmail= Request.headers['email'];
        let ParentCreation = await ParentModel.create(Parent);

        // Child Creation
        if(ParentCreation['_id']){
            try{
                let Childs = Request.body['Childs'];
                await Childs.forEach((element)=>{
                    element[JoinPropertyName] = ParentCreation['_id'];
                    element['UserEmail']=Request.headers['email']
                });
                let ChildsCreation = await ChildsModel.insertMany(Childs);
                return {status:"Sucess", Parent: ParentCreation, Childs: ChildsCreation}
            }catch (e){
                await ParentModel.remove({_id:ParentCreation['_id']})
                return {status: "fail", data: "Child Creation Failed"}
            }
        }else{
            return {status:"Fail", data: "Parent Creation Failed"}
        }
    }
    catch(error){
        return {status:"fail", data: error.toString()}
    }
}
module.exports = CreateParentChildsService