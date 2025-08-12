import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetWorkspaceMembers = () => {
    const data = useQuery(api.workspace.workspaceActions.getWorkspaceMembers);

    const isLoading = data === undefined;

    return { data, isLoading };
};
