const DataModel = require("../../models/Products/ProductModel");
const CreateService = require("../../services/common/CreateService")
const UpdateService = require("../../services/common/UpdateService");

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