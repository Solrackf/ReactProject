import axios from 'axios';

const url = 'http://localhost:5000/post';

// export const createUser = (newUser) => fetch(url, {
//     method: 'POST',
//     body: { newUser }
// })
export const fetchUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);