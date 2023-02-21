import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})