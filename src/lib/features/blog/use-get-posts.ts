import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

const BATCH_SIZE = 10;

export const useGetBlogPosts = () => {
    const { results, status, loadMore, isLoading } = usePaginatedQuery(
        api.user.blog.getAllPosts,
        {},
        { initialNumItems: BATCH_SIZE }
    );
    return { results, status, loadMore: () => loadMore(BATCH_SIZE), isLoading };
};
