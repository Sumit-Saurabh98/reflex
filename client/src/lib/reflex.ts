import axios from "axios";

const reflex = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true, 
});

export default reflex;