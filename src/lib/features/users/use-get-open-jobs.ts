import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetOpenJobs = () => {
    const data = useQuery(api.noAuth.jobs.getAllJobOpenings);
    const isLoading = data === undefined;
    return { data, isLoading };
};
