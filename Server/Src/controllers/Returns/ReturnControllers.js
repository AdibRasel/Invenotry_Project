const ParentModel = require("../../models/Returns/ReturnsModel")
const ChildsModel = require("../../models/Returns/ReturnProductModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");

// Create Return
exports.CreateReturn = async (req, res)=>{
    let Result = await CreateParentChildsService(req, ParentModel, ChildsModel, "PurchaseID")
    res.status(200).json(Result)
} 


// Return List
exports.ReturnList = async (req, res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "customers", localField: "customerID", foreignField: "_id", as: "customer"}};
    let SearchArray=[{Note: SearchRgx},{'customer.Name': SearchRgx},{'customer.Address': SearchRgx},{'customer.Phone': SearchRgx},{'customer.Email': SearchRgx}]
    let Result=await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}