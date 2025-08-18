import { v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { CustomError } from "../errorUtils";
import { paginationOptsValidator } from "convex/server";

export const createRequirement = mutation({
    args: {
        jobId: v.id("jobs"),
        requirement: v.string(),
    },
    async handler(ctx, args) {
        try {
            const userId = await getAuthUserId(ctx);

            if (!userId) throw new CustomError("User Id not found.");

            const job = await ctx.db.get(args.jobId);

            if (!job) {
                throw new CustomError("Job not found");
            }

            const requirements = await ctx.db
                .query("jobListingRequirements")
                .withIndex("by_job_id", q => q.eq("jobId", args.jobId))
                .collect();

            if (requirements.length > 10)
                throw new CustomError(
                    "A job shouldn't have more than 10 requirments."
                );

            const requirementId = await ctx.db.insert(
                "jobListingRequirements",
                {
                    jobId: args.jobId,
                    requirement: args.requirement,
                }
            );

            return {
                status: true,
                data: requirementId,
            };
        } catch (err: unknown) {
            console.log("[ADD_REQUIREMENT_ERR]:", err);

            if (err instanceof Error) {
                return {
                    status: false,
                    error: err.message,
                };
            }

            return {
                status: false,
                error: "Failed to add requirement",
            };
        }
    },
});

export const deleteRequirement = mutation({
    args: {
        requirementId: v.optional(v.id("jobListingRequirements")),
    },
    async handler(ctx, args) {
        try {
            const requirementId = args.requirementId;
            if (!requirementId) {
                throw new CustomError("Requirement ID is required");
            }
            const requirement = await ctx.db.get(requirementId);

            if (!requirement) {
                throw new CustomError("Requirement not found");
            }

            const requirements = await ctx.db
                .query("jobListingRequirements")
                .withIndex("by_job_id", q => q.eq("jobId", requirement.jobId))
                .collect();

            if (requirements.length === 1)
                throw new CustomError(
                    "You can't delete the only requirement for a job."
                );

            await ctx.db.delete(requirementId);

            return {
                status: true,
            };
        } catch (err: unknown) {
            console.log("[DELETE_REQUIREMENT_ERR]:", err);

            if (err instanceof Error) {
                return {
                    status: false,
                    error: err.message,
                };
            }

            return {
                status: false,
                error: "Failed to delete requirement",
            };
        }
    },
});

export const getJobDetail = query({
    args: {
        jobId: v.optional(v.id("jobs")),
    },
    async handler(ctx, args) {
        const jobId = args.jobId;

        if (!jobId) return null;

        const userId = await getAuthUserId(ctx);

        if (!userId) return null;

        const job = await ctx.db.get(jobId);

        if (!job) return null;

        const requirements = await ctx.db
            .query("jobListingRequirements")
            .withIndex("by_job_id", q => q.eq("jobId", jobId))
            .collect();

        const applications = await ctx.db
            .query("jobApplications")
            .withIndex("by_role_id", q => q.eq("roleId", job._id))
            .collect();

        return {
            job,
            requirements,
            applications,
        };
    },
});

export const getJobsCount = query({
    handler: async ctx => {
        const userId = await getAuthUserId(ctx);

        if (!userId) return null;

        const count = await ctx.db.query("jobs").collect();

        return count.length;
    },
});

export const getJobs = query({
    args: {
        paginationOpts: paginationOptsValidator,
    },
    handler: async (ctx, args) => {
        const userId = await getAuthUserId(ctx);

        if (!userId) {
            throw {
                message: "Unauthenticated",
            };
        }

        const jobs = await ctx.db
            .query("jobs")
            .order("desc")
            .paginate(args.paginationOpts);

        return jobs;
    },
});

export const createJob = mutation({
    args: {
        title: v.string(),
        slug: v.string(),
        label: v.string(),
        description: v.string(),
        location: v.string(),
        requirement: v.string(),
    },
    async handler(ctx, args) {
        try {
            const userId = await getAuthUserId(ctx);

            if (!userId) throw new CustomError("Unauthenticated");

            const jobs = await ctx.db.query("jobs").collect();

            const jobId = await ctx.db.insert("jobs", {
                isActive: true,
                order: jobs.length + 1,
                slug: args.slug,
                title: args.title,
                description: args.description,
                label: args.label,
                location: args.location,
                userId,
            });

            await ctx.db.insert("jobListingRequirements", {
                jobId,
                requirement: args.requirement,
            });

            return {
                status: true,
                data: jobId,
            };
        } catch (err: unknown) {
            console.log("CREATE_JOB_ERROR:", err);

            if (err instanceof Error) {
                return {
                    status: true,
                    error: err.message,
                };
            }

            return {
                status: false,
                error: "An error occurred while creating job",
            };
        }
    },
});
