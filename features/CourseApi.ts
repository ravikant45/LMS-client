import axios from "axios";

const uri = process.env.EXPO_PUBLIC_SERVER_API;

export const getCourses = async () => {
    const response = await axios.get(`${uri}/get-courses`);
    return response.data;
}