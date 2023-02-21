import {axiosInstance} from './axiosInstance';

export const loginApi = async (email, password) => {
    const res = await axiosInstance.post('middleware/user', {
        credentials:{
            user: email,
            code: password
        }
    })
    return res;
}