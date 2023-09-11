import React, { useRef } from 'react';

import style from "./RegistrationPage.module.css"
import axios from 'axios';

const RegistrationPage = () => {


    let EmailRef, FirstNameRef, LastNameRef, MobileRef, PassRef  = useRef;

const Submit=()=>{
    let Email = EmailRef.value;
    let FirstName = FirstNameRef.value;
    let LastName = LastNameRef.value;
    let Mobile = MobileRef.value;
    let Password = PassRef.value;

    if(EmailRef.value <=2){
        alert("Please Type email Address")
    }else if(FirstName.value <=3){
        alert("Please Type FirstName")
    }else if(LastName.value <=0){
        alert("Please Type LastName")
    }else if(Mobile.value <=3){
        alert("Please Type Mobile")
    }else if(Password.value <=3){
        alert("Please Type Password")
    }else{

        const URL = "http://localhost:8080/api/v1/Registration"

        const PostBody = {"email":Email,"firstName":FirstName, "lastName":LastName, "mobile":Mobile, "password":Password, "photo": "PhotoLink" }

        axios.post(URL, PostBody)
          .then((Res)=>{
            console.log(Res)

            if(Res.data.status==="success"){
                // Set Token 
                // SetToken(Res.data.toekn)

                // Set User Details
                // SetUserDetails(Res.data.data);
                console.log(Res)
                alert("Registration Success");
                // window.location.href="/LoginPage"
            }else{
                alert("Registration Faild")
            }
          })
          .catch(err => console.error(err));

    }

}




    return (
        <div>

            <div className={style.Box}>
                <h3>Sign Up / Registration</h3>
                <div className={style.EmailAddress}>
                    <span>Email Address</span>
                    <input ref={(input)=>EmailRef=input} className={style.input_Item} type="email" placeholder='User Email' />
                </div>
                <div className={style.FirstName}>
                    <span>First Name</span>
                    <input ref={(input)=>FirstNameRef=input} className={style.input_Item} type="text" placeholder='First Name' />
                </div>
                <div className={style.LastName}>
                    <span>Last Name</span>
                    <input ref={(input)=>LastNameRef=input} className={style.input_Item} type="text" placeholder='Last name' />
                </div>
                <div className={style.Mobile}>
                    <span>Mobile</span>
                    <input ref={(input)=>MobileRef=input} className={style.input_Item} type="text" placeholder='Mobile Number' />
                </div>
                <div className={style.Password}>
                    <span>Password</span>
                    <input ref={(input)=>PassRef=input} className={style.input_Item} type="password" placeholder='Password' />
                </div>
                <div className="Submit">
                    <button className={style.Submit} onClick={Submit}>Submit</button>
                </div>


                <div>
                    <p className={style.BTN}><a className='Button_Two' href="/LoginPage">Login</a></p>
                    <p ><a className='Button_Two' href="">Forget Password</a></p>
                </div>


            </div>
            
        </div>
    );
};

export default RegistrationPage;