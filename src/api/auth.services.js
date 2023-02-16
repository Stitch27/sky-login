import {axiosInstance} from './axiosInstance';

export const loginApi = async (email, password) => {
    const res = await axiosInstance.post('auth/login', {
        username: email,
        password: password
    })
    return res;
}