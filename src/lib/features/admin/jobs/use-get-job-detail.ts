import { useQuery } from "convex/react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

interface Props {
    jobId: Id<"jobs">;
}

export const useGetJobDetailById = ({ jobId }: Props) => {
    const data = useQuery(api.admin.jobs.getJobDetail, {
        jobId,
    });

    const isLoading = data === undefined;

    return { data, isLoading };
};
