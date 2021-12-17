import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from './actions/users';

import Home from './layouts/home/Home';
import SignUp from './layouts/UserSignUp/UserSignUp';
import UsersManagement from './components/UsersManagement/UsersManagement';
import './index.css'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <Home/>
      <UsersManagement/>
      <SignUp/>
    </div>
  );
}
export default App;