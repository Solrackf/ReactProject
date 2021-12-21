import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from './actions/users';

import Home from './layouts/home/Home';
import SignUp from './layouts/UserSignUp/UserSignUp';
import UserEdit from './layouts/UserEdit/UserEdit';
import SimplePay from './layouts/SimplePayment/SimplePay';
import SimpleSignIn from './layouts/simpleSignIn/simpleSignIn';
import States from './layouts/states/States';
import InternalUserDashboard from './layouts/InternalUserDashboard/InternalUserDashboard';
import SignInView from './layouts/SignInView/SignInView';
import MinState from './layouts/MinState/MinState';
import Error404 from './layouts/404/404';
import InvoiceCreation from './layouts/InvoiceCreation/InvoiceCreation';
import PredioRegister from './components/PredioRegister/PredioRegister';

import './index.css'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [currentId, dispatch]);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Users" element={<UserEdit/>}/>
          <Route path="/SimplePay" element={<SimplePay/>}/>
          <Route path="/SimpleSignIn" element={<SimpleSignIn/>}/>
          <Route path="/SignIn" element={<SignInView/>}/>
          <Route path="/invoiceCreation" element={<InvoiceCreation/>}/>
          <Route path="/InternalUserDashboard" element={<InternalUserDashboard/>}/>
          <Route path="/States" element={ <States/> } />
          <Route path="/MinState" element={<MinState/>} />
          <Route path="*" element={ <Error404/> }/>
          <Route path="/newEstate" element={ <PredioRegister/> }/>
        </Routes>
      </BrowserRouter>
    );
}
export default App;
