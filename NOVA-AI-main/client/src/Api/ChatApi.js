import axios from "axios";

const API_URL = "http://localhost:5000/api/chat";

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(API_URL, {
            message: message,
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};