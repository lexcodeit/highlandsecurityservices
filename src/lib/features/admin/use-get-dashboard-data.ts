import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetDashboardData = () => {
    const data = useQuery(api.admin.dashboard.getMainDashboard);

    const isLoading = data === undefined;

    return { data, isLoading };
};
