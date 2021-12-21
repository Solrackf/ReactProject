import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchUsers = () => axios.get(`${url}/post`);
export const createUser = (newUser) => axios.post(url, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${url}/post/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url}/post/${id}`);

export const fetchEstates = () => axios.get(`${url}/estate/Estates`);
export const createEstate = (newEstate) => axios.post(`${url}/estate/newEstate`, newEstate);
export const updateEstate = (id, updateEstate) => axios.patch(`${url}/estate/${id}`, updateEstate);
export const deleteEstate = (id) => axios.delete(`${url}/estate/${id}`);