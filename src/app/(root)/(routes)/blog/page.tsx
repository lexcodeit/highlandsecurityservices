"use client";
import EmptySection from "@/components/global/empty-section";
import LoaderComponent from "@/components/global/loader-component";
import { Button } from "@/components/ui/button";
import { useGetPostCategories } from "@/lib/features/blog/use-get-post-categories";
import { useGetBlogPosts } from "@/lib/features/blog/use-get-posts";
import React from "react";
import PerBlogCategory from "./per-blog-category";
import PerBlogPost from "./per-blog-post";

const BlogPage = () => {
    const { loadMore, results: posts, status } = useGetBlogPosts();
    const { data: categories, isLoading: loadingCategories } =
        useGetPostCategories();

    const handleClickCategory = () => {};

    return (
        <div className="min-h-screen pt-25">
            <div className="max-w-[1300px] mx-auto pt-10 grid grid-cols-[1fr_2fr]">
                <div className=" ">
                    <div className="mb-6">
                        <h1 className="uppercase font-outfit text-3xl">Blog</h1>
                    </div>

                    {loadingCategories ? (
                        <LoaderComponent />
                    ) : !categories ? (
                        <div>
                            <p>
                                Failed to get post categories at the moment.
                                Please try again later!
                            </p>
                        </div>
                    ) : (
                        <div className="flex items-center gap-x-4 flex-wrap gap-y-4">
                            <PerBlogCategory
                                text="All Posts"
                                onClick={() => handleClickCategory()}
                                isActive
                            />
                            {categories.map(category => {
                                return (
                                    <PerBlogCategory
                                        key={category._id}
                                        onClick={() => handleClickCategory()}
                                        text={category.title}
                                        isActive={false}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className=" py-4">
                    {status === "LoadingFirstPage" ? (
                        <LoaderComponent />
                    ) : !posts.length ? (
                        <EmptySection text="No posts at the moment" />
                    ) : (
                        <div className="flex-1 flex flex-col bg-white">
                            <div className="flex-1">
                                {posts.map(post => {
                                    if (!post.category) return null;
                                    return (
                                        <PerBlogPost
                                            key={post._id}
                                            post={post}
                                        />
                                    );
                                })}
                            </div>
                            {status !== "Exhausted" ? (
                                <Button
                                    onClick={() => {
                                        loadMore();
                                    }}
                                    disabled={status === "LoadingMore"}
                                >
                                    Load More Posts
                                </Button>
                            ) : null}
                        </div>
                    )}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
