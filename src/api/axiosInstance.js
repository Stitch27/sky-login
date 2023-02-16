import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})