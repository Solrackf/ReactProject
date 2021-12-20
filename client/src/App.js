import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from './actions/users';

import Home from './layouts/home/Home';
import SignUp from './layouts/UserSignUp/UserSignUp';
import UsersManagement from './components/UsersManagement/UsersManagement';
import EditUsersManagement from './components/EditUsersManagement/EditUsersManagement';

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
          <Route path="/Users" element={<UsersManagement/>} setCurrentId={setCurrentId}/>
          <Route path="/Edit" element={<EditUsersManagement/>} currentId={currentId} setCurrentId={setCurrentId}/>
        </Routes>
      </BrowserRouter>
    );
}
export default App;
