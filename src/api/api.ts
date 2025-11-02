


import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001/v1",
    headers: {
        "Content-Type": "application/json",
    },
});





export const getAllProducts = async () => {
    const response = await api.get("/products");
    return response.data;
};

