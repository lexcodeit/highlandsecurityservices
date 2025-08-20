import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface Props {
    jobSlug: string;
}

export const useGetJobDetailBySlug = ({ jobSlug }: Props) => {
    const data = useQuery(api.noAuth.jobs.getJobDetail, {
        jobSlug,
    });

    const isLoading = data === undefined;

    return { data, isLoading };
};
