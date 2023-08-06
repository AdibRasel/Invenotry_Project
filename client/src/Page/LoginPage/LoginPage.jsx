import React, { useRef } from 'react';
import axios from "axios"
import styles  from "./LoginPage.module.css"
import { SetToken, SetUserDetails } from '../../Helper/SessionHelper';

let PassRef, EmailRef = useRef;

const Submit=()=>{
    let Email = EmailRef.value;
    let Password = PassRef.value;

    if(EmailRef.value <=2){
        alert("Please Type email Address")
    }else if(PassRef.value <=3){
        alert("Please Type Password")
    }else{

        const URL = "http://localhost:8080/api/v1/Login"

        const PostBody = {"email":Email, "password":Password}

        axios.post(URL, PostBody)
          .then((Res)=>{
            if(Res.data.status==="success"){
                // Set Token 
                SetToken(Res.data.toekn)

                // Set User Details
                SetUserDetails(Res.data.data);
                alert("Login Success");
                window.location.href="/DashBoard"
            }else{
                alert("Login Faild")
            }
          })
          .catch(err => console.error(err));

    }

}





const LoginPage = () => {
    return (
        <div className={styles.FullPage}>
           <div className={styles.Box}>
                <div className={styles.Title}>Sign In</div>

                    <p>User Email :</p>
                    <div className={styles.UserEmail}>
                        <input ref={(input)=>EmailRef=input} type="email" placeholder='User Email' />
                    </div>

                    <p>User Password :</p> 
                    <div className={styles.Password}>
                        <input ref={(input)=>PassRef=input} type="password" placeholder='User Password' />
                    </div>

                    <div className={styles.NextButton}><a onClick={Submit} className='Button_Two'>Login</a></div>

                    <div className={styles.SignForget}>
                        <p className={styles.Sign_Left}><a className='Button_One' href="">Create Account / Sign Up</a></p>
                        <p className={styles.Password_Right}><a className='Button_One' href="">Forget Password</a></p>
                    </div>
           </div>
        </div>
    );
};

export default LoginPage;