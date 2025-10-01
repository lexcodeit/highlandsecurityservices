import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "../_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { CustomError } from "../errorUtils";

export const createPostCategory = mutation({
    args: {
        slug: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            const userId = await getAuthUserId(ctx);
            if (!userId) throw new CustomError("User not found");

            const postCategoryId = await ctx.db.insert("postCategories", {
                slug: args.slug,
                title: args.title,
            });

            return {
                status: true,
                data: postCategoryId,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {
                    status: false,
                    error: error.message,
                };
            }

            return {
                status: false,
                error: "Failed to create a post category.",
            };
        }
    },
});

export const getPostsCategories = query({
    handler: async ctx => {
        const userId = await getAuthUserId(ctx);

        if (!userId) return null;
        const categories = await ctx.db.query("postCategories").collect();
        return categories;
    },
});

export const createPost = mutation({
    args: {
        title: v.string(),
        slug: v.string(),
        bodyHtml: v.string(),
        bodyJson: v.any(),
        categoryId: v.array(v.id("postCategories")),
        shortBody: v.string(),
        coverImage: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            const userId = await getAuthUserId(ctx);
            if (!userId) throw new CustomError("User not found");

            const postId = await ctx.db.insert("posts", {
                author: userId,
                bodyHtml: args.bodyHtml,
                bodyJson: args.bodyJson,
                categories: args.categoryId,
                publishStatus: "DRAFT",
                shortBody: args.shortBody,
                slug: args.slug,
                title: args.title,
                coverImage: args.coverImage,
            });

            return {
                status: true,
                data: postId,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {
                    status: false,
                    error: error.message,
                };
            }

            return {
                status: false,
                error: "Failed to create a post",
            };
        }
    },
});

export const getPostsCount = query({
    handler: async ctx => {
        const userId = await getAuthUserId(ctx);

        if (!userId) return null;

        const count = await ctx.db.query("posts").collect();

        return count.length;
    },
});

export const getPosts = query({
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

        const posts = await ctx.db
            .query("posts")
            .order("desc")
            .paginate(args.paginationOpts);

        return posts;
    },
});
