const DataModel = require("../../models/Expnses/ExpensesModel")
const CreateService = require("../../services/common/CreateService");
const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsByIDService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const UpdateService = require("../../services/common/UpdateService");





exports.CreateExpense = async (req, res) =>{
    let Result = await CreateService(req, DataModel)
    res.status(200).json(Result)
}



exports.UpdateExpense = async (req, res)=>{
    let Result = await UpdateService(req, DataModel)
    res.status(200).json(Result)
}


exports.ExpensesList = async (req, res)=>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    // let SearchArray = [{Note: SearchRgx}, {Amount: SearchRgx}, {'Type.Name': SearchRgx}]
    let SearchArray = [{Note: SearchRgx}, {'Type.Name': SearchRgx}]
    let JoinStage = {$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}}
    
    let Result = await ListOneJoinService(req, DataModel, SearchArray, JoinStage)
    res.status(200).json(Result)
}


exports.DeleteExpense = async (req, res)=>{
    let Result = await DeleteService (req, DataModel)
    res.status(200).json(Result)
}





 // Expense Details By Id 
 exports.ExpenseDetailsByID = async (req, res) => {
    let Result = await DetailsByIDService(req, DataModel);
    res.status(200).json(Result)
}