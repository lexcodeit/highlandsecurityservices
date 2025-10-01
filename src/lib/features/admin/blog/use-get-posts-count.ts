import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export const useGetPostsCount = () => {
    const data = useQuery(api.admin.blog.getPostsCount);

    const isLoading = data === undefined;

    return { data, isLoading };
};
