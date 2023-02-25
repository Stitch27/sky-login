import {axiosInstance} from './axiosInstance';

export const loginApi = async (email, password) => {
    const url = 'EnterpriseFlows/Sel/AutenticarUsuarioRest'
    const headers = {'Authorization':'Basic amhlcm5hbmRlem06Smgzcm40bmRlek0=', 
    'Content-Type':'application/json'}
    const data = {'EBMHeaderRequest':{'Operacion': 'Autenticacion usuario','SistemaOrigen': 'ServiciosEnLinea','SeguridadList':{'SeguridadItem':[{
        'SistemaAAutenticar': 'SEL',
        'Username': 'jhernandnezm',
        'Password': 'ArVRHmSYeoXyC88V_O1DywPg280h7rKaYVy1YdfAfd0*'
    }]}}, 'AutenticarUsuarioInputMessage':{'Correo': email,
    'Password': password}}
    const res = await axiosInstance({method:'POST', headers, url, data})
    return res;
}