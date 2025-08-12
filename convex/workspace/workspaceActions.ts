import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "../_generated/server";
import { MemberListReturnType } from "../helpers/convexTypes";

export const getWorkspaceMembers = query({
    async handler(ctx) {
        const userId = await getAuthUserId(ctx);

        if (!userId) return null;

        const adminMembers = await ctx.db
            .query("workspaceMembers")
            .withIndex("by_role", q => q.eq("role", "ADMIN"))
            .order("asc")
            .collect();

        const normalMembers = await ctx.db
            .query("workspaceMembers")
            .filter(q =>
                q.or(
                    q.eq(q.field("role"), "MANAGER"),
                    q.eq(q.field("role"), "WORKER")
                )
            )
            .order("asc")
            .collect();

        const invites = await ctx.db
            .query("workspaceInvites")
            .filter(q => q.eq(q.field("joined"), undefined))
            .collect();

        const adminMembersList: MemberListReturnType[] = [];
        const normalMembersList: MemberListReturnType[] = [];

        for (const member of adminMembers) {
            const profile = await ctx.db
                .query("profiles")
                .filter(q => q.eq(q.field("userId"), member.userId))
                .unique();
            if (profile) {
                adminMembersList.push({
                    ...profile,
                    workspaceRole: member.role,
                });
            }
        }

        for (const member of normalMembers) {
            const profile = await ctx.db
                .query("profiles")
                .filter(q => q.eq(q.field("userId"), member.userId))
                .unique();
            if (profile) {
                normalMembersList.push({
                    ...profile,
                    workspaceRole: member.role,
                });
            }
        }

        return { adminMembersList, normalMembersList, invites };
    },
});
