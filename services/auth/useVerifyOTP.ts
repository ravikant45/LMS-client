import { verifyAccount } from "@/features/AuthApi"
import { useMutation } from "@tanstack/react-query"
import { Toast } from "react-native-toast-notifications"

const useVerifyAccount = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: (values: any) => verifyAccount(values),
        onSuccess: (res: any) => {
            Toast.show("Verification Success!!", {
                type: 'success'
            })
        },
        onError: (err: any) => {
            Toast.show("Invalid Token or Token Expired!!", { type: 'danger' })
        }
    });
    return {
        verifyAccount: mutate,
        isVerficationPending: isPending
    }
}

export default useVerifyAccount;