import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

axiosInstance.interceptors.response.use(function(response){

    const code = response.data.EBMHeaderResponse.ErrorNegocio.CodigoError;
    const desription  = response.data.EBMHeaderResponse.ErrorNegocio.DescripcionError;
    if(code !== '0'){

        return Promise.reject(desription);
    }
    return response;

})

export {axiosInstance}