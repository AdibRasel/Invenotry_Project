const PurchessModel = require("../../models/Purchases/PurchaseProductsModel");
const PurchaseReportService = async (Request)=>{
    try{
        let UserEmail = Request.headers['email'];
        let FormDate = Request.body['FormDate'];
        let ToDate = Request.body['ToDate'];

        let data = await PurchessModel.aggregate([
            {$match: {UserEmail:UserEmail, CreateDate:{$gte: new Date(FormDate), $lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Amount"}
                        }
                    }],
                    Rows:[{
                        $lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}
                    }],
                }
            }
        ])
        return {status:"Success", data:data}
    }catch(error){
        return {status: "faild", data: error.toString()}
    }
}
module.exports = PurchaseReportService