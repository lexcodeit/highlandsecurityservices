import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetLandingPageOpenJobs = () => {
    const data = useQuery(api.noAuth.jobs.getLandingPageJobOpenings);
    const isLoading = data === undefined;
    return { data, isLoading };
};
