import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { UserGenderUnion } from "../unions";
import { getAuthUserId } from "@convex-dev/auth/server";
import { getProfileByUserId } from "../helpers/db";
import { CustomError } from "../errorUtils";

export const createProfile = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        phoneNumber: v.string(),
        gender: UserGenderUnion,
    },
    handler: async (ctx, args) => {
        try {
            const userId = await getAuthUserId(ctx);
            if (!userId) {
                throw new CustomError("Unauthenticated");
            }

            const user = await ctx.db.get(userId);

            if (!user || !user.email) {
                throw new CustomError("Invalid user not found");
            }

            const profile = await getProfileByUserId(ctx, userId);

            if (profile) {
                throw new CustomError("Invalid request");
            }

            const phoneNumberExists = await ctx.db
                .query("profiles")
                .filter(q => q.eq(q.field("phoneNumber"), args.phoneNumber))
                .unique();

            if (phoneNumberExists) {
                throw new CustomError("Phone number already exists");
            }

            const profiles = await ctx.db.query("profiles").collect();

            if (profiles.length > 0) {
                // Check if the user is an invited user
                const invite = await ctx.db
                    .query("workspaceInvites")
                    .filter(q => q.eq(q.field("email"), user.email))
                    .unique();

                if (!invite) {
                    throw new CustomError("Invalid request");
                }

                // Update the invite outcome
                const profileId = await ctx.db.insert("profiles", {
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: user.email,
                    gender: args.gender,
                    userId,
                    accountStatus: "ACTIVE",
                    phoneNumber: args.phoneNumber,
                    role: profiles.length === 0 ? "ADMIN" : "USER",
                });

                await ctx.db.insert("workspaceMembers", {
                    userId,
                    role: profiles.length === 0 ? "ADMIN" : invite.role,
                });

                await ctx.db.patch(invite._id, {
                    joined: Date.now(),
                });

                return {
                    status: true,
                    data: profileId,
                };
            }

            // Update the invite outcome
            const profileId = await ctx.db.insert("profiles", {
                firstName: args.firstName,
                lastName: args.lastName,
                email: user.email,
                gender: args.gender,
                userId,
                accountStatus: "ACTIVE",
                phoneNumber: args.phoneNumber,
                role: profiles.length === 0 ? "ADMIN" : "USER",
            });

            await ctx.db.insert("workspaceMembers", {
                role: "ADMIN",
                userId,
            });

            return {
                status: true,
                data: profileId,
            };
        } catch (err: unknown) {
            console.log("[CREATE_PROFILE_ERR:", err);
            if (err instanceof Error) {
                return {
                    status: false,
                    error: err?.message || "Failed to create the  profile",
                };
            } else {
                return {
                    status: false,
                    error: "Failed to create the profile",
                };
            }
        }
    },
});
