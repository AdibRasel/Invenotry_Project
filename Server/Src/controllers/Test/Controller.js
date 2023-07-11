const DataModel = require("../../models/Test/TestModel")
const TestService = require("../../services/common/TestService");

// Create Product 
exports.TestController = async (req, res)=>{
    let Result = await TestService(req, DataModel);
    res.status(200).json(Result)
}