const mongoose = require("mongoose");
const DataShema = mongoose.Schema({
    UserEmail:{type:String},
    CustomerName:{type:String},
    Phone:{type:String, unique: true},
    Email:{type:String},
    Address:{type:String},
    CreateDate:{type:String, default:Date.now()}
},{versionKey:false});
const CustomersModel = mongoose.model("customers", DataShema);
module.exports= CustomersModel