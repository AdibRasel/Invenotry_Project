const mongoose = require("mongoose")
const DataSchema = mongoose.Schema({
    Name:{type:String},
    Address:{type:String},
    Phone:{type:String},
    Email:{type:String},
    roll:{type:String},
    class: {type:String},
    city:{type:String},
    salary:{type:Number},
    CreateDate:{type:String, default:Date.now()}
},{versionKey:false});
const TestModel = mongoose.model("TestModel", DataSchema);
module.exports = TestModel