import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { CustomError } from "../errorUtils";
import { internal } from "../_generated/api";
import { getAdminProfileByUserId, isAlreadyInvited } from "../helpers/db";
import { WorkspaceRoleUnion } from "../unions";

export const revokeInvite = mutation({
    args: {
        inviteId: v.id("workspaceInvites"),
    },
    handler: async (ctx, args) => {
        try {
            const userId = await getAuthUserId(ctx);

            if (!userId) {
                throw new CustomError("Unauthenticated");
            }

            const profile = await ctx.db
                .query("profiles")
                .withIndex("by_user_id", q => q.eq("userId", userId))
                .unique();

            if (!profile || !profile.role || profile.role !== "ADMIN") {
                throw new CustomError(
                    "You do not have enough permissions to revoke invite to a user."
                );
            }

            const invite = await ctx.db.get(args.inviteId);

            if (!invite) {
                throw new CustomError(`Invite does not exist.`);
            }

            if (invite.joined) {
                throw new CustomError(`User has already joined.`);
            }

            await ctx.db.delete(invite._id);

            return {
                status: true,
                data: invite._id,
            };
        } catch (err: unknown) {
            console.log("[DELETE_USER_INVITE:", err);
            if (err instanceof Error) {
                return {
                    status: false,
                    error: err?.message || "Failed to delete the invite",
                };
            } else {
                return {
                    status: false,
                    error: "Failed to delete the invite",
                };
            }
        }
    },
});

export const resendInvite = mutation({
    args: {
        inviteId: v.id("workspaceInvites"),
    },
    handler: async (ctx, args) => {
        try {
            const userId = await getAuthUserId(ctx);

            if (!userId) {
                throw new CustomError("Unauthenticated");
            }

            const profile = await ctx.db
                .query("profiles")
                .withIndex("by_user_id", q => q.eq("userId", userId))
                .unique();

            if (!profile || !profile.role || profile.role !== "ADMIN") {
                throw new CustomError(
                    "You do not have enough permissions to resend invite to a user."
                );
            }

            const invite = await ctx.db.get(args.inviteId);

            if (!invite) {
                throw new CustomError(`Invite does not exist.`);
            }

            if (invite.joined) {
                throw new CustomError(`User has already joined.`);
            }

            await ctx.scheduler.runAfter(
                0,
                internal.emailActions.sendInviteToUsers,
                {
                    email: invite.email as string,
                    subject: "Important and Confidential",
                }
            );

            await ctx.db.patch(invite._id, {
                resendCount: invite.resendCount + 1,
            });

            return {
                status: true,
                data: invite._id,
            };
        } catch (err: unknown) {
            console.log("[RESEND_USER_INVITE:", err);
            if (err instanceof Error) {
                return {
                    status: false,
                    error: err?.message || "Failed to resend the invite",
                };
            } else {
                return {
                    status: false,
                    error: "Failed to resend the invite",
                };
            }
        }
    },
});

export const createAccountInvite = mutation({
    args: {
        email: v.string(),
        role: WorkspaceRoleUnion,
    },
    handler: async (ctx, args) => {
        try {
            const userId = await getAuthUserId(ctx);
            if (!userId) {
                throw new CustomError("Unauthenticated");
            }

            const profile = await getAdminProfileByUserId(ctx, userId);

            if (
                !profile ||
                !profile.role ||
                profile.workspaceMember.role !== "ADMIN"
            ) {
                throw new CustomError(
                    "You do not have enough permissions to invite a user."
                );
            }

            const userExists = await ctx.db
                .query("profiles")
                .filter(q => q.eq(q.field("email"), args.email))
                .unique();

            if (userExists) {
                throw new CustomError(
                    `User ${args.email} has been invited already.`
                );
            }

            const inviteExists = await isAlreadyInvited(ctx, args.email);

            if (inviteExists) {
                throw new CustomError(
                    `User ${args.email} has been invited already.`
                );
            }

            const invitedId = await ctx.db.insert("workspaceInvites", {
                email: args.email,
                invitedBy: userId,
                resendCount: 0,
                role: args.role,
            });

            await ctx.scheduler.runAfter(
                0,
                internal.emailActions.sendInviteToUsers,
                {
                    email: args.email as string,
                    subject: "Important and Confidential",
                }
            );

            return {
                status: true,
                data: invitedId,
            };
        } catch (err: unknown) {
            console.log("[CREATE_USER_INVITE:", err);
            if (err instanceof Error) {
                return {
                    status: false,
                    error:
                        err?.message || "Failed to send invite to admin user",
                };
            } else {
                return {
                    status: false,
                    error: "Failed to send invite to admin user",
                };
            }
        }
    },
});
