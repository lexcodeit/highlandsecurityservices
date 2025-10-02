import { query } from "../_generated/server";

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
