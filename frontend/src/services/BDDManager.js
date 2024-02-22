import axios from 'axios';
const urlApi = 'http://localhost:3001/api/v1/';

/**
 * connection à l'api
 * @param {*} email 
 * @param {*} password 
 * @returns token
 */
export const LoginApi = async (email, password) => {
    try {
        const response = await axios.post(`${urlApi}user/login`, {
            email: email,
            password: password
        });
        return response.data.body.token;
    } catch (error) {
        return 'error';
    }
}

/**
 * retourne les infos persos du user
 * @param {*} token 
 * @returns 
 */
export const GetProfile = async (token) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const response = await axios.post(`${urlApi}user/profile`, {}, config);
        return response.data.body;
    } catch (error) {
        return 'error';
    }
}

/**
 * Update les infos en BDD
 * @param {*} token 
 * @param {*} firstName 
 * @param {*} lastName 
 * @returns 
 */
export const UpdateInfos = async (token, firstName, lastName) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const response = await axios.put(`${urlApi}user/profile`, {
            firstName: firstName,
            lastName: lastName
        }, config);
        return response.data.body;
    } catch (error) {
        return 'error';
    }
}