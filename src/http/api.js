import axios from 'axios';

const URL = "https://back-end-prep-project.vercel.app" //Change the link to the backend link


const getDonations = async () => {
    try {
        const response = await axios.get(`${URL}/donations`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const postDonations = async (userData) => {
    console.log("from api", userData);
    try {
        const response = await axios.post(`${URL}/donations`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateDonations = async (id, userData) => {
    try {
        const response = await axios.put(`${URL}/donations/${id}`, userData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

const deleteDonations = async (id) => {
    try {
        const response = await axios.delete(`${URL}/donations/${id}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

const getVolanteer = async () => {
    try {
        const response = await axios.get(`${URL}/volunteer`);
       
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

const postVolanteer = async (userData) => {
    try {
        const response = await axios.post(`${URL}/volunteer`, userData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

const deleteVolanteer = async (id) => {
    try {
        const response = await axios.delete(`${URL}/volunteer/${id}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

const getPrayerTimes = async () => {
    try {
        const response = await axios.get(`${URL}/api`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
    }
};

const postUser = async (user) => {
    try {
        const response = await axios.post(`${URL}/user`,user);
        return response.data;
    } catch (error) {
        // console.error(error)
    }
};


export { postUser,getDonations, postDonations, getPrayerTimes, updateDonations, deleteDonations, getVolanteer, postVolanteer, deleteVolanteer };
