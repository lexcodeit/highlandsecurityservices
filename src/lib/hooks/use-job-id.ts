import { useParams } from "next/navigation";
import { Id } from "../../../convex/_generated/dataModel";

export const useJobId = () => {
    const params = useParams();

    return params.jobId as Id<"jobs">;
};
