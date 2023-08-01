const ExpenseReportService = require("../../services/report/ExpenseReportService");
const PurchaseReportService = require("../../services/report/PurchaseReportService");
const ReturnReportService = require("../../services/report/ReturnReportService");
const SelesReportService = require("../../services/report/SelesReportService");






// Expenses Report
exports.ExpensesByDate = async (req, res)=>{
    let Result = await ExpenseReportService(req);
    res.status(200).json(Result)
}

// Purchase Report
exports.PurchaseByDate = async (req, res)=>{
    let Result = await PurchaseReportService(req);
    res.status(200).json(Result)
}

// Return Report
exports.ReturnByDate = async (req, res)=>{
    let Result = await ReturnReportService(req);
    res.status(200).json(Result)
}

// Seles Report
exports.SelesByDate = async (req, res)=>{
    let Result = await SelesReportService(req);
    res.status(200).json(Result)
}