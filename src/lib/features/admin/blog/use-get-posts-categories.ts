import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export const useGetPostsCategories = () => {
    const data = useQuery(api.admin.blog.getPostsCategories);

    const isLoading = data === undefined;

    return { data, isLoading };
};
