import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export const useGetFeaturedPosts = () => {
    const data = useQuery(api.user.blog.getFeaturedPosts);
    const isLoading = data === undefined;
    return { data, isLoading };
};
