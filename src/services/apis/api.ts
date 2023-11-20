import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/api/sso/',
    timeout: 30000,
    headers: {'Content-type': 'application/json',}
});


