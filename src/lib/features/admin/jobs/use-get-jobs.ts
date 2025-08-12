import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

const BATCH_SIZE = 20;

export const useGetJobsList = () => {
    const { results, status, loadMore } = usePaginatedQuery(
        api.admin.jobs.getJobs,
        {},
        { initialNumItems: BATCH_SIZE }
    );

    return { results, status, loadMore: () => loadMore(BATCH_SIZE) };
};
