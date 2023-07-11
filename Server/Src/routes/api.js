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

//Expenses Type
const ExpensesTypes = require("../controllers/Expenses/ExpensesTypesControllers")

// Expenses Controller 
const ExpensesController = require("../controllers/Expenses/ExpensesController")

// Product Controller 
const ProductController = require("../controllers/Products/ProductsController")

//Purchases Controller
const PurchasesController = require("../controllers/Purchases/PurchasesController")

//Sales Controller
const SalesController = require("../controllers/Sales/SalesController")

//Returns Controllers
const ReturnController = require("../controllers/Returns/ReturnControllers");

// TestController 
const  TestController  = require("../controllers/Test/Controller");



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
Router.get("/DeleteBrands/:id", AuthVerifyMiddleware, BrandsController.DeleteBrand)




//Categoris
Router.post("/CreateCategoris", AuthVerifyMiddleware, CategoriesControllers.CreateCategories);
Router.post("/UpdateCategoris/:id", AuthVerifyMiddleware, CategoriesControllers.UpdateCategories);
Router.get("/CategorisList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CategoriesControllers.CategoriesList);
Router.get("/CategorisDropDwon", AuthVerifyMiddleware, CategoriesControllers.CategoriesDropDown)
Router.get("/DeleteCategories/:id", AuthVerifyMiddleware, CategoriesControllers.DeleteCategories)



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


// Expenses Types
Router.post("/CreateExpensesTypes", AuthVerifyMiddleware, ExpensesTypes.CreateExpenseTypes);
Router.post("/UpdateExpensesTypes/:id", AuthVerifyMiddleware, ExpensesTypes.UpdateExpenseTypes);
Router.get("/ExpensesTypesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,  ExpensesTypes.ExpenseTypesList);
Router.get("/ExpensesTypesDropDwon", AuthVerifyMiddleware, ExpensesTypes.ExpenseTypesDropDown)




// Expenses 
Router.post("/CreateExpenses", AuthVerifyMiddleware, ExpensesController.CreateExpense)
Router.post("/UpdateExpenses/:id", AuthVerifyMiddleware, ExpensesController.UpdateExpense)
Router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ExpensesController.ExpensesList)
Router.get("/DeleteExpense/:id", AuthVerifyMiddleware, ExpensesController.DeleteExpense)


// Products 
Router.post("/CreateProduct", AuthVerifyMiddleware, ProductController.CreateProduct);
Router.post("/UpdateProduct/:id", AuthVerifyMiddleware, ProductController.UpdateProduct);
Router.get("/ProductsList/:pageNo/:perPage/:SearchKeyword", AuthVerifyMiddleware, ProductController.ProductList)


//Purchases
Router.post("/CreatePurchases", AuthVerifyMiddleware, PurchasesController.CreatePurchases)
Router.post("/PurchasesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, PurchasesController.PurchasesList)
Router.get("/PurchasesDelete/:id", AuthVerifyMiddleware, PurchasesController.PurchasesDelete)


// Sales
Router.post("/CreateSales", AuthVerifyMiddleware, SalesController.CreateSales)
Router.post("/SalesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SalesController.SalesList)
Router.get("/SalesDelete/:id", AuthVerifyMiddleware, SalesController.SalesDelete)


// Return 
Router.post("/CreateReturn", AuthVerifyMiddleware, ReturnController.CreateReturn)
Router.post("/ReturnList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ReturnController.ReturnList)
Router.get("/ReturnDelete/:id", AuthVerifyMiddleware, ReturnController.ReturnDelete)



// Test 
Router.post("/Test", TestController.TestController)


module.exports=Router