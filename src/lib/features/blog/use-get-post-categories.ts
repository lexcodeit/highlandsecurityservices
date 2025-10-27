import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetPostCategories = () => {
    const data = useQuery(api.user.blog.getAllPostCategories);
    const isLoading = data === undefined;
    return { data, isLoading };
};
