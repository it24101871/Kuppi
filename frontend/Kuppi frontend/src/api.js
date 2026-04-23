import axios from 'axios';

const API = axios.create({
 baseURL: import.meta.env.VITE_API_URL,
});

export const getItems = () => API.get('/items');
export const createItem = (data) => API.post('/items', data);
export const deleteItem = (id) => API.delete(`/items/${id}`);
export const updateItem = (id, data) => API.put(`/items/${id}`, data);

console.log("ENV:", import.meta.env);
console.log("API URL:", import.meta.env.VITE_API_URL);