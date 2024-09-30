import { signUp } from "@/features/AuthApi"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useSignUp = () => {

    const { mutate, isPending } = useMutation({
        mutationFn: (values: any) => signUp(values),
        onSuccess: async (res: any) => {
            await AsyncStorage.setItem('activation_token', res.activationToken);
            Toast.show(res.message, {
                type: 'success'
            })
        },
        onError: (err: any) => {
            console.log(err)
            Toast.show(err?.message, { type: 'danger' })
        }
    })

    return {
        signUp: mutate,
        isSignUpPending: isPending,
    }
}

export default useSignUp;