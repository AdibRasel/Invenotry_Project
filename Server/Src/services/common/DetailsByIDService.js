const mongoose = require("mongoose");
const DetailsByIDService = async (Request, DataModel) => {
    try{
        let DetailsID = Request.params.id;
        let UserEmail = Request.headers['email'];

        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject = {};
        QueryObject['_id'] = new ObjectId(DetailsID);
        QueryObject['UserEmail']=UserEmail;

        let data = await DataModel.aggregate([
            {$match: QueryObject}
        ])
        return {status: "Success", data:data}


    }catch(error){
        return {status:"Fail", data: error.toString()}
    }
}

module.exports = DetailsByIDService