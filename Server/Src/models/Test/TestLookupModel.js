const mongoose = require("mongoose")
const DataSchema=mongoose.Schema({
    // UserEmail:{type:String},
    PersonID:{type:mongoose.Schema.Types.ObjectId},
    // BrandID:{type:mongoose.Schema.Types.ObjectId},
    ProductName:{type:String},
    Unit:{type:String},
    Details:{type:String},
    Price:{type:Number},
    CreateDate:{type:Date, default:Date.now()}
},{versionKey:false});
const ProductsModel = mongoose.model("TestLookupModel", DataSchema);
module.exports= ProductsModel