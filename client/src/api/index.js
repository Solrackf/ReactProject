import axios from 'axios'

const url = 'http://localhost:5000/home'

export const fetchUsers = ()=> axios.get(url)