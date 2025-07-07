import axios from "axios";

const API = axios.create({ baseURL: window.location.hostname === 'localhost'
        ? 'http://localhost:2060'
        : 'https://shopping-cart-t95h.onrender.com', withCredentials: true });

export default API;
