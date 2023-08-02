const ExpenseSummaryService = require("../../services/summary/ExpenseSummaryService")
const PurchaseSummaryService = require("../../services/summary/PurchaseSummaryService")
const ReturnSummaryService = require("../../services/summary/ReturnSummaryService")
const SelesSummaryService = require("../../services/summary/SelesSummaryService")



// ExpensesSummary Report 
exports.ExpenseSummary = async (req, res) => {
    let Result = await ExpenseSummaryService(req)
    res.status(200).json(Result)
}


// PurchaseSummary Report 
exports.PurchaseSummary = async (req, res) => {
    let Result = await PurchaseSummaryService(req)
    res.status(200).json(Result)
}


// ReturnSummary Report 
exports.ReturnSummary = async (req, res) => {
    let Result = await ReturnSummaryService(req)
    res.status(200).json(Result)
}


// SelesSummary Report 
exports.SelesSummary = async (req, res) => {
    let Result = await SelesSummaryService(req)
    res.status(200).json(Result)
}