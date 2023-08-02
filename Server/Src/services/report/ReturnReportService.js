const ReturnModel = require("../../models/Returns/ReturnProductModel");
const ReturnReportService = async (Request)=>{
    try{
        let UserEmail = Request.headers['email'];
        let FormDate = Request.body['FormDate'];
        let ToDate = Request.body['ToDate'];

        let data = await ReturnModel.aggregate([
            {$match: {UserEmail:UserEmail, CreatedDate:{$gte: new Date(FormDate), $lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Total"}
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "products", localField: "ProductID", foreignField: "_id", as: "Products"}},
                        // {$unwind:"$products"},
                        {$lookup: {from: "brands", localField: "products.BrandID", foreignField: "_id", as: "brands"}},
                        {$lookup: {from: "categories", localField: "products.CategoryID", foreignField: "_id", as: "categories"}},
                    ],
                }
            }
        ])
        return {status:"Success", data:data}
    }catch(error){
        return {status: "faild", data: error.toString()}
    }
}
module.exports = ReturnReportService