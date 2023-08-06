import React, { Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GetToken } from './Helper/SessionHelper';

// Css 
import "./Style.css"

// All Page Import 
import LoginPage from './Page/LoginPage/LoginPage';
import HomePage from './Page/HomePage/HomePage';
import DashBoard from './Page/DashBoard/DashBoard';


const App = () => {

  if(GetToken()){

        return (
          <Fragment>
            <BrowserRouter>
              <Routes>
               <Route path="/DashBoard" element={<DashBoard />} />
               <Route path="/" element={<DashBoard />} />
              </Routes>
            </BrowserRouter>
          </Fragment>
        )

  }else{

        return (
          <Fragment>
            <BrowserRouter>
              <Routes>
               <Route path="/" element={<HomePage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>
          </Fragment>
        )

  }
  
};

export default App;
