const mongoose = require("mongoose")
const DataSchema = mongoose.Schema({
    UserEmail:{type:String},
    CustomerID:{type:mongoose.Schema.Types.ObjectID},
    VatTax:{type:Number},
    Discount:{type:Number},
    OtherCost:{type:Number},
    ShippingCost:{type:Number},
    GrandTotal:{type:Number},
    Note:{type:String},
    CreatedDate:{type:Date, default:Date.now()}
},{versionKey:false})
const SalesModel = mongoose.model("Sales", DataSchema)
module.exports= SalesModel