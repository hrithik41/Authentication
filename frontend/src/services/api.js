import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3005/auth"
});

export const register = (userData) => {
    return API.post("/register", userData)
};

export const verifyOtp = (userData) => {
    return API.post("/verifyOtp", userData)
};

export const login = (userData) => {
    return API.post("/login", userData);
};