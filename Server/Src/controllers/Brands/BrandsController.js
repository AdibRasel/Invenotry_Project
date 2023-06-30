const DataModel = require("../../models/Brands/BrandsModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const DeleteService = require("../../services/common/DeleteService");
const ProductsModel = require("../../models/Products/ProductModel")
const mongoose = require("mongoose");



exports.CreateBrand = async (req, res)=>{
    let Result = await CreateService(req, DataModel)
    res.status(200).json(Result)
}


exports.UpdateBrand = async (req, res)=>{
    let Result = await UpdateService(req, DataModel)
    res.status(200).json(Result)
}


exports.BrandList = async (req, res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArry = [{Name: SearchRgx}]
    let Result = await ListService(req, DataModel, SearchArry)
    res.status(200).json(Result)
}


exports.BrandDropDown = async (req, res)=>{
    Result = await DropDownService(req, DataModel, {_id:1, Name:1})
    res.status(200).json(Result)
}



exports.DeleteBrand=async (req, res) => {
    let DeleteID=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    // let CheckAssociate= await CheckAssociateService({BrandID:ObjectId(DeleteID)},{ProductsModel});
    // if(CheckAssociate){
    //     res.status(200).json({status: "associate", data: "Associate with Product"})
    // }
    // else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    // }
 }