const express = require("express");
const Router = express.Router();

const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware")

//User Controller
const UserController = require("../controllers/Users/UsersController")

// Brands Controller
const BrandsController = require("../controllers/Brands/BrandsController")

//Categoris
const CategoriesControllers = require("../controllers/Categories/CategoriesController")

// Customers
const CustomersControllers = require("../controllers/Customers/CustomerController")

// Suppliers
const SuppliersController = require("../controllers/Suppliers/SuppliersController")

//Expenses
const Expenses = require("../controllers/Expenses/ExpensesTypesControllers")





// User Profile
Router.post("/Registration", UserController.Registration);
Router.post("/Login", UserController.Login);
Router.post("/ProfileUpdate", AuthVerifyMiddleware, UserController.ProfileUpdate);
Router.get("/ProfileDetails", AuthVerifyMiddleware, UserController.ProfileDetails);
// Password Reset
Router.get("/RecoverVerifyEmail/:email", UserController.RecoverVerifyEmail);
Router.get("/RecoverVerifyOTP/:email/:otp", UserController.RecoverVerifyOTP);
Router.post("/RecoverResetPass", UserController.RecoverResetPass);
// Delete OTP Data
Router.post("/OTPDataDalte", UserController.OTPDataDelete);




// Brands
Router.post("/CreateBrand", AuthVerifyMiddleware, BrandsController.CreateBrand);
Router.post("/UpdateBrand/:id", AuthVerifyMiddleware, BrandsController.UpdateBrand);
Router.get("/BrandList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, BrandsController.BrandList);
Router.get("/BrandDropDwon", AuthVerifyMiddleware, BrandsController.BrandDropDown)



//Categoris
Router.post("/CreateCategoris", AuthVerifyMiddleware, CategoriesControllers.CreateCategories);
Router.post("/UpdateCategoris/:id", AuthVerifyMiddleware, CategoriesControllers.UpdateCategories);
Router.get("/CategorisList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CategoriesControllers.CategoriesList);
Router.get("/CategorisDropDwon", AuthVerifyMiddleware, CategoriesControllers.CategoriesDropDown)



// Customers
Router.post("/CreateCustomers", AuthVerifyMiddleware, CustomersControllers.CreateCustomer);
Router.post("/UpdateCustomers/:id", AuthVerifyMiddleware, CustomersControllers.UpdateCustomer);
Router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware, CustomersControllers.CustomerList);
Router.get("/CustomersDropDwon", AuthVerifyMiddleware, CustomersControllers.CustomerDropDown)



// Suppliers
Router.post("/CreateSuppliers", AuthVerifyMiddleware, SuppliersController.CreateSupplier);
Router.post("/UpdateSuppliers/:id", AuthVerifyMiddleware, SuppliersController.UpdateSupplier);
Router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,  SuppliersController.SupplierList);
Router.get("/SuppliersDropDwon", AuthVerifyMiddleware, SuppliersController.SupplierDropDown)


// Expenses
Router.post("/CreateExpensesTypes", AuthVerifyMiddleware, Expenses.CreateExpenseTypes);
Router.post("/UpdateExpensesTypes/:id", AuthVerifyMiddleware, Expenses.UpdateExpenseTypes);
Router.get("/ExpensesTypesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,  Expenses.ExpenseTypesList);
Router.get("/ExpensesTypesDropDwon", AuthVerifyMiddleware, Expenses.ExpenseTypesDropDown)










module.exports=Router