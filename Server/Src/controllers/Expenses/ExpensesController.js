const DataModel = require("../../models/Expnses/ExpensesModel")
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");





exports.CreateExpense = async (req, res) =>{
    let Result = await CreateService(req, DataModel)
    res.status(200).json(Result)
}


exports.UpdateExpense = async (req, res)=>{
    let Result = await UpdateService(req, DataModel)
    res.status(200).json(Result)
}


