import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { SourceOfInfoUnion, UserGenderUnion } from "../unions";
import { CustomError } from "../errorUtils";
import { internal } from "../_generated/api";

export const createApplication = mutation({
    args: {
        firstName: v.string(),
        lastName: v.string(),
        phone: v.string(),
        email: v.string(),
        roleId: v.id("jobs"), // Reference to the job they're applying for
        location: v.string(),
        experienceLevel: v.string(),
        resumeUrl: v.string(), // If you upload CV/ID
        gender: UserGenderUnion,
        sourceOfInfo: SourceOfInfoUnion,
        answers: v.object({
            q1: v.string(),
            q2: v.string(),
            q3: v.string(),
        }),
    },
    async handler(ctx, args) {
        try {
            const emailExists = await ctx.db
                .query("jobApplications")
                .withIndex("by_email", q => q.eq("email", args.email))
                .unique();
            const phoneExists = await ctx.db
                .query("jobApplications")
                .withIndex("by_phone", q => q.eq("phone", args.phone))
                .unique();

            if (emailExists) {
                throw new CustomError(
                    "This email exists already. Please use a different one."
                );
            }

            if (phoneExists) {
                throw new CustomError(
                    "This phone number exists already. Please use a different one."
                );
            }

            const applicationId = await ctx.db.insert("jobApplications", {
                answers: {
                    q1: args.answers.q1,
                    q2: args.answers.q2,
                    q3: args.answers.q3,
                },
                email: args.email,
                experienceLevel: args.experienceLevel,
                firstName: args.firstName,
                gender: args.gender,
                lastName: args.lastName,
                location: args.location,
                phone: args.phone,
                resumeUrl: args.resumeUrl,
                roleId: args.roleId,
                sourceOfInfo: args.sourceOfInfo,
                status: "PENDING",
            });

            await ctx.scheduler.runAfter(
                0,
                internal.emailActions.sendApplicationConfirmationMail,
                {
                    email: args.email as string,
                    firstName: args.firstName,
                    lastName: args.lastName,
                }
            );

            return {
                status: true,
                data: applicationId,
            };
        } catch (err: unknown) {
            console.log("[CREATE_JOB_APPLICATIONS_ERR:", err);
            if (err instanceof Error) {
                return {
                    status: false,
                    error:
                        err?.message || "Unable to create the job application.",
                };
            } else {
                return {
                    status: false,
                    error: "Unable to create the job application.",
                };
            }
        }
    },
});
