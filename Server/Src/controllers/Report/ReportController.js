const ExpenseReportService = require("../../services/report/ExpenseReportService");






// Expenses Report
exports.ExpensesByDate = async (req, res)=>{
    let Result = await ExpenseReportService(req);
    res.status(200).json(Result)
}