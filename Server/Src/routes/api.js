const express = require("express");
const Router = express.Router();

const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware")

//User Controller
const UserController = require("../controllers/Users/UsersController")

// Brands Controller
const BrandsController = require("../controllers/Brands/BrandsController")


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





module.exports=Router