import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const uri = process.env.EXPO_PUBLIC_SERVER_URI;

export const loginUser = async (values: any) => {
    const response = await axios.post(`${uri}/login`, values);
    return response.data;
}

export const signUp = async (values: any) => {
    const response = await axios.post(`${uri}/registration`, values);
    return response.data;
}

export const verifyAccount = async (values: any) => {
    const response = await axios.post(`${uri}/activate-user`, values);
    return response.data;
}

export const getUserProfile = async () => {
    const accessToken = await AsyncStorage.getItem('access_token');
    const refreshToken = await AsyncStorage.getItem('refresh_token');
    const response = await axios.get(`${uri}/me`, {
        headers: {
            'access-token': accessToken,
            'refresh-token': refreshToken
        }
    })
    return response.data;
}