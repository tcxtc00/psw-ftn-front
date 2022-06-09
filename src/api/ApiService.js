import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});