import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index';

export const getEstate = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEstates();

        dispatch({ type: FETCH_ALL , payload: data })
    } catch (error) {
        console.log(error.message)
    }
};

export const createEstate = (estate) => async (dispatch) => {
    try {
        const { data } = await api.createEstate(estate);

        dispatch({ type: CREATE , payload: data })
    } catch (error) {
        console.log(error.message)
    }
};

export const updateEstate = (id, estate) => async (dispatch) => {
    try {
        const { data } = await api.updateEstate(id, estate);

        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

// export const deleteEstate = (id) => async (dispatch) => {
//     try {
//         await api.deleteEstate(id);

//         dispatch({ type: DELETE, payload: id })
//     } catch (error) {
//         console.log(error.message)
//     }
// }