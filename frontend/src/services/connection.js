import axios from 'axios';

export const getInfos = async (id, pass) => {
    //faire une const
    const mainData = await axios.post(`http://localhost:3001/api/v1/user/login`);
    // const mainData = await axios.get(`http://localhost:3001/user/${id}`);
    return mainData;
}