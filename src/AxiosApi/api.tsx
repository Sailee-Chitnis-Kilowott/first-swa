import axios from 'axios';
const url:string = "http://localhost:4280/api/";
export const getUsersById = async () =>{    return await axios.get(`${url}:name`);}
