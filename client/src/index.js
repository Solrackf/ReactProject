import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import SimplePay from './layouts/SimplePayment/SimplePay'
import SimpleSignIn from './layouts/simpleSignIn/simpleSignIn'
import States from './layouts/states/States'
import UserSignUp from './layouts/UserSignUp/UserSignUp'
import InternalUserDashboard from './layouts/InternalUserDashboard/InternalUserDashboard'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/SimplePay" element={<SimplePay/>}/>
        <Route path="/SimpleSignIn" element={<SimpleSignIn/>}/>
        <Route path="/SignUp" element={<UserSignUp/>}/>
        <Route path="/InternalUserDashboard" element={<InternalUserDashboard/>}/>
        <Route path="/States" element={ <States/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
