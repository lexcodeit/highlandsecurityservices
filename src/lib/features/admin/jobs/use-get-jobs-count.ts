import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export const useGetJobsCount = () => {
    const data = useQuery(api.admin.jobs.getJobsCount);

    const isLoading = data === undefined;

    return { data, isLoading };
};
