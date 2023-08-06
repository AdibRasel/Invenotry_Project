class SessionHelper {

    SetToken(token){
        localStorage.setItem("token", token)
    }
    GetToken(){
        return localStorage.getItem("token")
    }


    SetUserDetails(UserDetails){
        localStorage.setItem("UserDetails", JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }

}


export const {SetToken, GetToken, SetUserDetails, getUserDetails} = new SessionHelper();