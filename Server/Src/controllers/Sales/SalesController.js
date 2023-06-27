const ParentModel = require("../../models/Sales/SalesModel");
const ChildsModel = require("../../models/Sales/SaleProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const DeleteParentChildsService = require("../../services/common/DeleteParentChildsService");

// Create Sales
exports.CreateSales = async (req, res)=>{
    let Result = await CreateParentChildsService(req, ParentModel, ChildsModel, "SalesID")
    res.status(200).json(Result)
} 


// Sales List
exports.SalesList = async (req, res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "customers", localField: "customerID", foreignField: "_id", as: "customer"}};
    let SearchArray=[{Note: SearchRgx},{'customer.Name': SearchRgx},{'customer.Address': SearchRgx},{'customer.Phone': SearchRgx},{'customer.Email': SearchRgx}]
    let Result=await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}


// Sales Delete
exports.SalesDelete = async (req, res)=>{
    let Result = await DeleteParentChildsService(req, ParentModel, ChildsModel, "SalesID")
    res.status(200).json(Result)
}