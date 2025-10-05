import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "../_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { CustomError } from "../errorUtils";

export const toggleFeaturedPost = mutation({
    args: {
        postId: v.id("posts"),
    },
    async handler(ctx, args) {
        try {
            const postId = args.postId;

            if (!postId) throw new CustomError("Post Id is required");

            const post = await ctx.db.get(postId);

            if (!post) throw new CustomError("Post not found");

            // If we are about to toggle it to featured, check number of already featured posts
            if (!post.isFeatured) {
                if (post.publishStatus !== "PUBLISHED") {
                    throw new CustomError(
                        "You can't feature an unpublished post."
                    );
                }

                const alreadyFeaturedPost = await ctx.db
                    .query("posts")
                    .withIndex("by_is_featured", q => q.eq("isFeatured", true))
                    .collect();

                if (alreadyFeaturedPost.length >= 3) {
                    throw new CustomError(
                        "You have reached the limit for already featured posts."
                    );
                }
            }

            await ctx.db.patch(post._id, {
                isFeatured: post.isFeatured ? false : true,
            });

            return {
                status: true,
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
                error: "Failed to toggle featured post.",
            };
        }
    },
});

export const deletePost = mutation({
    args: {
        postId: v.id("posts"),
    },
    async handler(ctx, args) {
        try {
            const postId = args.postId;

            if (!postId) throw new CustomError("Post Id is required");

            const post = await ctx.db.get(postId);

            if (!post) throw new CustomError("Post not found");

            await ctx.db.delete(post._id);

            return {
                status: true,
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
                error: "Failed to delete post.",
            };
        }
    },
});

export const unpublishPost = mutation({
    args: {
        postId: v.id("posts"),
    },
    async handler(ctx, args) {
        try {
            const postId = args.postId;

            if (!postId) throw new CustomError("Post Id is required");

            const post = await ctx.db.get(postId);

            if (!post) throw new CustomError("Post not found");

            if (post.publishStatus === "UNPUBLISHED") {
                throw new CustomError("Post is already unpublished.");
            }

            if (post.publishStatus === "DRAFT") {
                throw new CustomError("You can't unpublish a draft post");
            }

            await ctx.db.patch(post._id, {
                publishStatus: "UNPUBLISHED",
                unpublishDate: Date.now(),
                isFeatured: false,
            });

            return {
                status: true,
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
                error: "Failed to unpublish post.",
            };
        }
    },
});

export const publishPost = mutation({
    args: {
        postId: v.id("posts"),
    },
    async handler(ctx, args) {
        try {
            const postId = args.postId;

            if (!postId) throw new CustomError("Post Id is required");

            const post = await ctx.db.get(postId);

            if (!post) throw new CustomError("Post not found");

            if (post.publishStatus === "PUBLISHED") {
                throw new CustomError("Post is already published.");
            }

            await ctx.db.patch(post._id, {
                publishStatus: "PUBLISHED",
                postDate: Date.now(),
            });

            return {
                status: true,
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
                error: "Failed to publish post.",
            };
        }
    },
});

export const getPostContent = query({
    args: {
        postSlug: v.optional(v.string()),
    },
    async handler(ctx, args) {
        const userId = await getAuthUserId(ctx);
        if (!userId) return null;
        const postSlug = args.postSlug;

        if (!postSlug) return null;

        const post = await ctx.db
            .query("posts")
            .withIndex("by_slug", q => q.eq("slug", postSlug))
            .first();

        if (!post) return null;

        return post;
    },
});

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

            const post = await ctx.db
                .query("posts")
                .withIndex("by_slug", q => q.eq("slug", args.slug))
                .first();

            if (post) {
                throw new CustomError("Post exists already");
            }

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
                isFeatured: false,
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
