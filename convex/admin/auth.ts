import { v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { CustomError } from "../errorUtils";
import { getAuthUserId } from "@convex-dev/auth/server";

export const checkAdminAccountExists = mutation({
    args: {
        email: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            const profiles = await ctx.db.query("profiles").collect();

            if (profiles.length === 0) {
                return {
                    status: true,
                    data: true,
                };
            }

            const invite = await ctx.db
                .query("workspaceInvites")
                .filter(q => q.eq(q.field("email"), args.email))
                .unique();

            if (invite) {
                return {
                    status: true,
                };
            }

            const profile = await ctx.db
                .query("profiles")
                .filter(q => q.eq(q.field("email"), args.email))
                .unique();

            if (!profile) {
                throw new CustomError(
                    "Account not found. Please check credentials or contact admin for an invite."
                );
            }

            if (profile.role !== "ADMIN") {
                throw new CustomError(
                    "Account not found. Please check credentials or contact admin for an invite."
                );
            }

            return {
                status: true,
            };
        } catch (err: unknown) {
            console.log("[CHECK_ACCOUNT_EXISTS_LOGIN_ERR:", err);
            if (err instanceof Error) {
                return {
                    status: false,
                    error:
                        err?.message ||
                        "Account does not exist. Please create an account.",
                };
            } else {
                return {
                    status: false,
                    error: "Account does not exist. Please create an account.",
                };
            }
        }
    },
});

export const getLoggedInUser = query({
    handler: async ctx => {
        const userId = await getAuthUserId(ctx);

        if (userId === null) return null;

        const profile = await ctx.db
            .query("profiles")
            .filter(q => q.eq(q.field("userId"), userId))
            .unique();

        if (!profile) return null;

        return profile;
    },
});
