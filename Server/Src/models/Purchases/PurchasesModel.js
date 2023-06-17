const mongoose = require("mongoose")
const DataSchema = mongoose.Schema({
    UserEmail:{type:String},
    SupplierID:{type:mongoose.Schema.Types.ObjectID},
    VatTax:{type:Number},
    Discount:{type:Number},
    OtherCost:{type:Number},
    ShippingCost:{type:Number},
    GrandTotal:{type:Number},
    Note:{type:String},
    CreatedDate:{type:Date, default:Date.now()}
},{versionKey:false})
const PurchasesModel = mongoose.model("Purchases", DataSchema)
module.exports= PurchasesModel