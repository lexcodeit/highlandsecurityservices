import { v } from "convex/values";
import { query } from "../_generated/server";

export const getJobDetail = query({
    args: {
        jobSlug: v.optional(v.string()),
    },
    async handler(ctx, args) {
        const jobSlug = args.jobSlug;

        if (!jobSlug) return null;

        const job = await ctx.db
            .query("jobs")
            .withIndex("by_slug", q => q.eq("slug", jobSlug))
            .first();

        if (!job) return null;

        const requirements = await ctx.db
            .query("jobListingRequirements")
            .withIndex("by_job_id", q => q.eq("jobId", job._id))
            .collect();

        return {
            job,
            requirements,
        };
    },
});

export const getAllJobOpenings = query({
    handler: async ctx => {
        const jobs = await ctx.db
            .query("jobs")
            .withIndex("by_status", q => q.eq("isActive", true))
            .collect();
        return jobs;
    },
});

export const getLandingPageJobOpenings = query({
    handler: async ctx => {
        const jobs = await ctx.db
            .query("jobs")
            .withIndex("by_status", q => q.eq("isActive", true))
            .take(2);
        return jobs;
    },
});
