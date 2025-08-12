import { v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { CustomError } from "../errorUtils";
import { paginationOptsValidator } from "convex/server";

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
