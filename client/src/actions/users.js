import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';
import * as api from '../api/index';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();

        dispatch({ type: FETCH_ALL , payload: data })
    } catch (error) {
        console.log(error.message)
    }
};

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);

        dispatch({ type: CREATE , payload: data })
    } catch (error) {
        console.log(error.message)
    }
};

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);

        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}