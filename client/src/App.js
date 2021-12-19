import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from './actions/users';

import Home from './layouts/home/Home';
import SignUp from './layouts/UserSignUp/UserSignUp';
import UsersManagement from './components/UsersManagement/UsersManagement';
import EditUsersManagement from './components/EditUsersManagement/EditUsersManagement';

import './index.css'

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [currentId, dispatch]);

    return (
      <div>
        <Home/>
        <UsersManagement setCurrentId={setCurrentId}/>
        <SignUp/>
        <EditUsersManagement currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
    );
}
export default App;
