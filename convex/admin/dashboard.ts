import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "../_generated/server";

export const getMainDashboard = query({
    async handler(ctx) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;

        const jobApplications = await ctx.db
            .query("jobApplications")
            .withIndex("by_status", q => q.eq("status", "PENDING"))
            .order("desc")
            .collect();

        return {
            jobApplications,
        };
    },
});
