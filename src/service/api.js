import axios from 'axios';
const url ="http://localhost:3000/competitions";

export const getAllCompetitions = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
};

export const addCompetition = async (comp) => {
    return await axios.post(url,comp);
};

export const editCompetition = async (id,comp) => {
    return await axios.put(`${url}/${id}`,comp);
};

export const deleteCompetition = async (id) => {
    return await axios.delete(`${url}/${id}`);
};