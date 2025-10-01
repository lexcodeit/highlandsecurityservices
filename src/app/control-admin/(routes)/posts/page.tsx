"use client";
import EmptySection from "@/components/global/empty-section";
import LoaderComponent from "@/components/global/loader-component";
import PostListRow from "@/components/tables/row-columns/posts-list-row";
import PostListHeader from "@/components/tables/row-headers/post-list-header";
import { Button } from "@/components/ui/button";
import { useGetPostsList } from "@/lib/features/admin/blog/use-get-posts";
import { useGetPostsCount } from "@/lib/features/admin/blog/use-get-posts-count";
import { formatTimeFn } from "@/utils/helpers";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ITEMS_PER_PAGE = 20;

const PostsPage = () => {
    const { results: posts, status, loadMore } = useGetPostsList();

    const { data } = useGetPostsCount();

    const totalPages = data ? Math.ceil(data / ITEMS_PER_PAGE) : 0;

    return (
        <div className="p-4 h-full flex flex-col">
            <div className="mt-2 mb-6 flex flex-row items-center justify-between space-x-6">
                <div className="flex items-center gap-x-3">
                    <h2 className="font-bold text-2xl">Blog Posts</h2>
                    {data === null || data === undefined ? (
                        <LoaderComponent />
                    ) : (
                        <h2 className="font-semibold">({data})</h2>
                    )}
                </div>

                <Link
                    href={"/control-admin/create-post"}
                    className="flex items-center gap-x-2 bg-btn-color hover:bg-btn-hover text-white p-3 rounded-md px-5"
                >
                    <PlusIcon />
                    <span className="text-sm font-medium font-outfit">
                        Add New Post
                    </span>
                </Link>
            </div>
            <div className="flex-1 py-4">
                {status === "LoadingFirstPage" ? (
                    <LoaderComponent />
                ) : !posts.length ? (
                    <EmptySection text="No posts at the moment" />
                ) : (
                    <div className="flex-1 flex flex-col bg-white">
                        <PostListHeader />
                        <div className="flex-1">
                            {posts.map(post => {
                                return (
                                    <PostListRow
                                        key={post._id}
                                        status={post.publishStatus}
                                        postSlug={post.slug}
                                        title={post.title}
                                        uploaded={formatTimeFn(
                                            post._creationTime
                                        )}
                                    />
                                );
                            })}
                        </div>
                        {totalPages ? (
                            <Button
                                onClick={() => {
                                    loadMore();
                                }}
                                disabled={
                                    status === "Exhausted" ||
                                    status === "LoadingMore"
                                }
                            >
                                Load More Jobs
                            </Button>
                        ) : null}
                    </div>
                )}
                <div></div>
            </div>
        </div>
    );
};

export default PostsPage;
