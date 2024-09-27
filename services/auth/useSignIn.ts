import { loginUser } from "@/features/AuthApi"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "react-native-toast-notifications"

const useSignIn = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: (values: any) => loginUser(values),
        onSuccess: async (res: any) => {
            await AsyncStorage.setItem('access_token', res.accessToken);
            await AsyncStorage.setItem('refresh_token', res.refreshToken);
            Toast.show("SignIn Successfull!", {
                type: 'success'
            });

        },
        onError: (err: any) => {
            Toast.show("Invalid Credintials!!", {
                type: 'danger'
            })
        }
    })

    return {
        mutate,
        isPending
    }
}

export default useSignIn;