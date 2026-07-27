const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
const response = await axios.get(`${API_URL}/all`);