const DataModel = require("../../models/UsersModel");
const OTPSModel = require("../../models/OTPSModel");
const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserResetPassService = require("../../services/user/UserResetPassService");
const UserVerifyOTPService = require("../../services/user/UserVerifyOtpService");
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService");



exports.Registration = async (req, res)=>{
    let Result = await UserCreateService(req, DataModel)
    res.status(200).json(Result)
}

exports.Login = async (req, res)=>{
    let Result = await UserLoginService(req, DataModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate = async (req, res)=>{
    let Result = await UserUpdateService(req, DataModel)
    res.status(200).json(Result)
}

exports.ProfileDetails = async (req, res)=>{
    let Result = await UserDetailsService(req, DataModel)
}

exports.RecoverVerifyEmail = async (req, res)=>{
    let Result = await UserVerifyEmailService(req, DataModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyOTP = async (req, res)=>{
    let Result = await UserVerifyOTPService(req, DataModel)
    res.status(200).json(Result)
}

exports.RecoverResetPass = async (req, res)=>{
    let Result = await UserResetPassService(req, DataModel)
    res.status(200).json(Result)
}