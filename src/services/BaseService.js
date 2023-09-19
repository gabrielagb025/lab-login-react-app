import axios from 'axios';

const createHttp = () => {
    const http = axios.create({
        baseURL: 'http://localhost:3000'
    })

    http.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
    )

    return http
}

export default createHttp;

