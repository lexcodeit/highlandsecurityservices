import { paginationOptsValidator } from "convex/server";
import { query } from "../_generated/server";

export const getAllPostCategories = query({
    handler: async ctx => {
        const categories = await ctx.db.query("postCategories").collect();

        return categories;
    },
});

export const getAllPosts = query({
    args: {
        paginationOpts: paginationOptsValidator,
    },
    handler: async (ctx, args) => {
        const results = await ctx.db
            .query("posts")
            .withIndex("by_publish_status", q =>
                q.eq("publishStatus", "PUBLISHED")
            )
            .order("desc")
            .paginate(args.paginationOpts);

        return {
            ...results,
            page: await Promise.all(
                results.page.map(async post => {
                    const category = await ctx.db.get(post.categories[0]);
                    return {
                        ...post,
                        category,
                    };
                })
            ).then(res => res.filter(r => r !== undefined)),
        };
    },
});

export const getFeaturedPosts = query({
    handler: async ctx => {
        const posts = await ctx.db
            .query("posts")
            .withIndex("by_is_featured", q => q.eq("isFeatured", true))
            .collect();

        const featuredPosts = await Promise.all(
            posts.map(async post => {
                const category = await ctx.db.get(post.categories[0]);
                return {
                    ...post,
                    category,
                };
            })
        );

        return featuredPosts;
    },
});
