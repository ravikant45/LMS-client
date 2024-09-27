import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const uri = process.env.SERVER_URI || "http://192.168.1.18:3000/api/v1";

export const loginUser = async (values: any) => {
    const response = await axios.post(`${uri}/login`, values);
    return response.data;
}

export const signUp = async (values: any) => {
    const response = await axios.post(`${uri}/registration`, values);
    return response.data;
}

export const verifyAccount = async (values: any) => {
    const response = await axios.post(`${uri}/verify-account`, values);
    return response.data;
}

export const getUserProfile = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const response = await axios.get(`${uri}/me`, {
        headers: {
            'accessToken': accessToken,
            'refreshToken': refreshToken
        }
    })
    return response.data;
}