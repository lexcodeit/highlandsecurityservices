import { v } from "convex/values";
import { query } from "../_generated/server";

export const getPostContent = query({
    args: {
        postSlug: v.optional(v.string()),
    },
    async handler(ctx, args) {
        const postSlug = args.postSlug;

        if (!postSlug) return null;

        const post = await ctx.db
            .query("posts")
            .withIndex("by_slug", q => q.eq("slug", postSlug))
            .first();

        if (!post) return null;

        const category = await ctx.db.get(post.categories[0]);

        if (!category) return null;

        return {
            ...post,
            category,
        };
    },
});
