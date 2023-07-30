const DataModel = require("../../models/Test/TestModel");
const DataModelLookup = require("../../models/Test/TestLookupModel");
const TestService = require("../../services/common/TestService");
const TestLookupService = require("../../services/common/TestLookup");

const ProductModel = require("../../models/Products/ProductModel")

// Test
exports.TestController = async (req, res)=>{
    let Result = await TestService(req, DataModel);
    res.status(200).json(Result)
}
// Test Lookup Operator
exports.TestLookup = async (req, res)=>{
    let Result = await TestLookupService(req, DataModelLookup);
    res.status(200).json(Result)
}