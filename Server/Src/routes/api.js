const express = require("express");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware")

const UserController = require("../controllers/Users/UsersController")

const Router = express.Router();


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





module.exports=Router