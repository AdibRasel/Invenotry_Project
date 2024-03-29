const DataModel = require("../../models/Products/ProductModel");
const CreateService = require("../../services/common/CreateService")
const UpdateService = require("../../services/common/UpdateService");
const ListTwoJoinService = require("../../services/common/ListTwoJoinService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");

// Create Product 
exports.CreateProduct = async (req, res)=>{
    let Result = await CreateService(req, DataModel);
    res.status(200).json(Result)
}

// Update Product 
exports.UpdateProduct= async (req, res)=>{
    let Result = await UpdateService(req, DataModel)
    res.status(200).json(Result)
}

//ProductList View$regex
exports.ProductList = async (req, res)=> {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage1 = {$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}}
    let JoinStage2 = {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}}
    
    let SearchArray = [{Name: SearchRgx}, {Unit: SearchRgx}, {Details: SearchRgx}, {'brands.Name': SearchRgx}, {'categories.Name': SearchRgx}]

    let Result = await ListTwoJoinService(req, DataModel, SearchArray, JoinStage1, JoinStage2)
    res.status(200).json(Result)



    // let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    // let JoinStage1={$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}};
    // let JoinStage2= {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}};
    // let SearchArray=[{Name: SearchRgx},{Unit: SearchRgx},{Details: SearchRgx},{'brands.Name':SearchRgx},{'categories.Name':SearchRgx}]
    // let Result=await ListTwoJoinService(req,DataModel,SearchArray,JoinStage1,JoinStage2);
    // res.status(200).json(Result)


}



 // Product Details By Id 
 exports.ProductDetailsByID = async (req, res) => {
    let Result = await DetailsByIDService(req, DataModel);
    res.status(200).json(Result)
}