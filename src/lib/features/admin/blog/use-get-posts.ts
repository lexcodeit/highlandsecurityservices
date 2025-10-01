import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

const BATCH_SIZE = 20;

export const useGetPostsList = () => {
    const { results, status, loadMore } = usePaginatedQuery(
        api.admin.blog.getPosts,
        {},
        { initialNumItems: BATCH_SIZE }
    );

    return { results, status, loadMore: () => loadMore(BATCH_SIZE) };
};
