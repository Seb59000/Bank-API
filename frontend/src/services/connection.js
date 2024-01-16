import axios from 'axios';

export const getInfos = async (id, pass) => {
    const mainData = await axios.get(`http://localhost:3001/`);
    // const mainData = await axios.get(`http://localhost:3001/user/${id}`);
    return mainData;
}