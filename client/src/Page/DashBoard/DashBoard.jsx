import React from 'react';

const DashBoard = () => {

    const Logout=()=>{
        localStorage.clear()
        window.location.href="/LoginPage"
    }


    return (
        <div>
            <h1>DashBoard</h1>
            <button onClick={Logout}>Logout</button>

        </div>
    );
};

export default DashBoard;