const mongoose = require("mongoose")
const DataSchema = mongoose.Schema({
    UserEmail:{type:String},
    Name:{type:String},
    Address:{type:String},
    Phone:{type:String},
    Email:{type:String},
    CreateDate:{type:String, default:Date.now()}
},{versionKey:false});
const SuppliersModel = mongoose.model("Suppliers", DataSchema);
module.exports = SuppliersModel