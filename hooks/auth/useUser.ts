import { getUserProfile } from "@/features/AuthApi";
import { User } from "@/types/global.d";
import { useEffect, useState } from "react";

const useUser = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User>();
    const [error, setError] = useState("");
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        const subscription = async () => {
            const data = await getUserProfile();
            if (data.error) {
                setError(data.error);
                setLoading(false);
                return;
            }

            setUser(data.user);
            setLoading(false);
        }
        subscription();
    }, [refetch]);

    return {
        user,
        loading,
        error,
        setRefetch,
        refetch
    };
}

export default useUser;