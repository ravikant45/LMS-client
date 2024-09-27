import { signUp } from "@/features/AuthApi"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useSignUp = () => {

    const { mutate, isPending } = useMutation({
        mutationFn: (values: any) => signUp(values),
        onSuccess: async (res: any) => {
            await AsyncStorage.setItem('activationToken', res.activationToken);
            Toast.show(res.message, {
                type: 'success'
            })
        },
        onError: (err: any) => {
            Toast.show("Email already Exists!!", { type: 'danger' })
        }
    })

    return {
        signUp: mutate,
        isSignUpPending: isPending,
    }
}

export default useSignUp;