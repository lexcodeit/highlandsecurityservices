import { Id } from "../_generated/dataModel";
import { QueryCtx } from "../_generated/server";

export const getProfileByUserId = (ctx: QueryCtx, userId: Id<"users">) => {
    return ctx.db
        .query("profiles")
        .filter(q => q.eq(q.field("userId"), userId))
        .unique();
};

export const getAdminProfileByUserId = async (
    ctx: QueryCtx,
    userId: Id<"users">
) => {
    const profile = await ctx.db
        .query("profiles")
        .filter(q => q.eq(q.field("userId"), userId))
        .unique();

    const workspaceMember = await ctx.db
        .query("workspaceMembers")
        .filter(q => q.eq(q.field("userId"), userId))
        .unique();

    if (!profile || !workspaceMember) return null;
    return { ...profile, workspaceMember };
};

export const isAlreadyInvited = (ctx: QueryCtx, email: string) => {
    return ctx.db
        .query("workspaceInvites")
        .filter(q => q.eq(q.field("email"), email))
        .unique();
};
