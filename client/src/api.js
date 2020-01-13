// Node Modules
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/',
  timeout: 3000,
});

export default api;
