import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UsersManagement from '../../components/UsersManagement/UsersManagement';
import EditUsersManagement from '../../components/EditUsersManagement/EditUsersManagement';

import { getUsers } from '../../actions/users';

export default function UserEdit(){
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [currentId, dispatch]);

    return (
        <div>
            <UsersManagement setCurrentId={setCurrentId}></UsersManagement>
            <EditUsersManagement currentId={currentId} setCurrentId={setCurrentId}></EditUsersManagement>
        </div>
    )
}