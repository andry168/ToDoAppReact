import axios from 'axios';

const api= axios.create({
    baseURL:'https://65561b0b84b36e3a431f0d7a.mockapi.io/api/v1/'
})

export default api;