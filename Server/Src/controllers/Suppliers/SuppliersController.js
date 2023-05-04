const DataModel = require("../../models/Suppliers/SuppliersModel")
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");


exports.CreateSupplier = async (req, res)=>{
    let Result = await CreateService (req, DataModel)
    res.status(200).json(Result)
}

exports.UpdateSupplier = async (req, res)=>{
    let Result = await UpdateService(req, DataModel)
    res.status(200).json(Result)
}


exports.SupplierList = async (req, res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray = [{Name: SearchRgx},{Phone: SearchRgx}, {Email: SearchRgx},{Address: SearchRgx}]
    let Result = await ListService (req, DataModel, SearchArray)
    res.status(200).json(Result)
}


exports.SupplierDropDown = async (req, res)=>{
    let Result = await DropDownService(req, DataModel, {_id:1, Name:0})
    res.status(200).json(Result)
}