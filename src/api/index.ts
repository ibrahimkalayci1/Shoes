import axios from "axios";

 const api = axios.create({
    baseURL:"http://localhost:3050",
});

//bütün ayakkabıları al
export const getShoes = () => api.get("/shoes").then((res) => res.data);