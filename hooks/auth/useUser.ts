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
            try {
                const data = await getUserProfile();
                if (data.error) {
                    setError(data.error);
                } else {
                    setUser(data.user);
                }
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching the user profile.");
            } finally {
                setLoading(false);
            }
        };

        subscription();
    }, [refetch]);

    return {
        user,
        loading,
        error,
        setRefetch,
        refetch
    };
};

export default useUser;
