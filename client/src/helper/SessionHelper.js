class SessionHelper {

    SetToken(token){
        localStorage.setItem("token", token)
    }
    GetToken(){
        return localStorage.getItem("token")
    }


    SetLoginStatus(LoginStatus){
        localStorage.setItem("LoginStatus", LoginStatus)
    }
    GetLoginStatus(){
        return localStorage.getItem("LoginStatus")
    }


    SetUserDetails(UserDetails){
        localStorage.setItem("UserDetails", JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }

 

}


export const {SetToken, GetToken, SetUserDetails, getUserDetails, SetLoginStatus, GetLoginStatus} = new SessionHelper();