"use client";
import EmptySection from "@/components/global/empty-section";
import ErrorScreen from "@/components/global/error-screen";
import LoaderComponent from "@/components/global/loader-component";
import PostCategoriesRow from "@/components/tables/row-columns/post-categories-row";
import PostCategoriesHeader from "@/components/tables/row-headers/post-categories-header";
import { Button } from "@/components/ui/button";
import { useGetPostsCategories } from "@/lib/features/admin/blog/use-get-posts-categories";
import { useCreatePostCategoryModal } from "@/lib/stores/modals";
import { Loader, PlusIcon } from "lucide-react";
import React from "react";

const PostCategoriesPage = () => {
    const { data: postCategories, isLoading } = useGetPostsCategories();
    const [, setOpenModal] = useCreatePostCategoryModal();

    return (
        <div className="p-4 h-full flex flex-col">
            <div className="mt-2 mb-6 flex flex-row items-center justify-between space-x-6">
                <div className="flex items-center gap-x-3">
                    <h2 className="font-bold text-2xl">Post Categories</h2>
                    {postCategories === null || postCategories === undefined ? (
                        <Loader className="animate-spin size-4" />
                    ) : (
                        <h2 className="font-semibold">
                            ({postCategories.length})
                        </h2>
                    )}
                </div>

                <Button
                    onClick={() => setOpenModal(true)}
                    className="flex items-center gap-x-2 bg-btn-color hover:bg-btn-hover text-white p-3 rounded-md px-5"
                >
                    <PlusIcon />
                    <span className="text-sm font-medium font-outfit">
                        Add Post Category
                    </span>
                </Button>
            </div>
            <div className="flex-1 py-4">
                {isLoading ? (
                    <LoaderComponent />
                ) : !postCategories ? (
                    <ErrorScreen />
                ) : !postCategories.length ? (
                    <EmptySection text="No post categories at the moment" />
                ) : (
                    <div className="flex-1 flex flex-col bg-white">
                        <PostCategoriesHeader />
                        <div className="flex-1">
                            {postCategories.map(category => {
                                return (
                                    <PostCategoriesRow
                                        key={category._id}
                                        slug={category.slug}
                                        categoryId={category._id}
                                        title={category.title}
                                        date={category._creationTime}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
                <div></div>
            </div>
        </div>
    );
};

export default PostCategoriesPage;
