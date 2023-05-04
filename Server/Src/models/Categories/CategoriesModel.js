const mongoose = require("mongoose")
const DataShema = mongoose.Schema({
    UserEmail:{type:String},
    Name:{type:String, unique:true},
    CreateDate:{type:String, default: Date.now()}
},{versionKey:false});
const CategoriesModel = mongoose.model("Categories", DataShema);
module.exports = CategoriesModel