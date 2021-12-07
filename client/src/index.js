import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimplePay from './layouts/SimplePayment/SimplePay'
import SimpleSignIn from './layouts/simpleSignIn/simpleSignIn'
import InternalUserDashboard from './layouts/InternalUserDashboard/InternalUserDashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/SimplePay" element={<SimplePay/>}/>
        <Route path="/SimpleSignIn" element={<SimpleSignIn/>}/>
        <Route path="/InternalUserDashboard" element={<InternalUserDashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
