const mongoose = require("mongoose")
const DataSchema=mongoose.Schema({
    UserEmail:{type:String},
    CategoryID:{type:mongoose.Schema.Types.ObjectId},
    BrandID:{type:mongoose.Schema.Types.ObjectId},
    Name:{type:String},
    Unit:{type:String},
    Details:{type:String},
    CreateDate:{type:Date, default:Date.now()}
},{versionKey:false});
const ProductsModel = mongoose.model("Products", DataSchema);
module.exports= ProductsModel