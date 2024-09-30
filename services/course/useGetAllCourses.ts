import { getCourses } from "@/features/CourseApi";
import { useQuery } from "@tanstack/react-query";

const useGetAllCourses = () => {
    const { data, isPending } = useQuery({
        queryKey: ["courses"],
        queryFn: getCourses,
        staleTime: 3000
    });

    return { data, isPending };
};

export default useGetAllCourses;