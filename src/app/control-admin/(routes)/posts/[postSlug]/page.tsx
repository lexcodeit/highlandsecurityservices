"use client";
import React, { useState } from "react";
import { usePostSlug } from "@/lib/hooks/use-post-slug";
import { useGetPostContentBySlug } from "@/lib/features/admin/blog/use-get-post-content-by-slug";
import LoaderComponent from "@/components/global/loader-component";
import { Button } from "@/components/ui/button";
import ErrorScreen from "@/components/global/error-screen";
import Image from "next/image";
import { PiDotsThreeOutline } from "react-icons/pi";
import { usePublishPost } from "@/lib/features/admin/blog/use-publish-post";
import { toast } from "sonner";
import { useUnpublishPost } from "@/lib/features/admin/blog/use-unpublish-post";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ConfirmDialog from "@/components/modals/confirm-dialog-modal";
import { useDeletePost } from "@/lib/features/admin/blog/use-delete-post";
import { useToggleFeaturedPost } from "@/lib/features/admin/blog/use-toggle-featured-post";
import { PostActionsModal } from "@/utils/enums";
import Link from "next/link";
import { useConfirmModal } from "@/lib/stores/modals";
import { BlogPageLink } from "@/utils/constants";
import LoadingDialog from "@/components/modals/loading-modal";

const PostPage = () => {
    const [action, setAction] = useState<PostActionsModal>();
    const [, setOpenModal] = useConfirmModal();
    const postSlug = usePostSlug();

    const { data: post, isLoading } = useGetPostContentBySlug({
        postSlug: postSlug as string,
    });

    const { mutate: publishPost, isPending: pendingPublish } = usePublishPost();
    const { mutate: unpublishPost, isPending: pendingUnpublish } =
        useUnpublishPost();
    const { mutate: deletePost, isPending: pendingDelete } = useDeletePost();
    const { mutate: toggleFeatured, isPending: pendingToggleFeatured } =
        useToggleFeaturedPost();

    const handlePublishPost = () => {
        if (!post) {
            return toast.error("Post not available");
        }
        publishPost(
            {
                postId: post?._id,
            },
            {
                onSuccess() {
                    toast.success("Post published successfully.");
                },
                onError(error) {
                    toast.error(
                        error.message || "Unable to publish post at the moment."
                    );
                },
            }
        );
    };

    const handleUnpublishPost = () => {
        if (!post) {
            return toast.error("Post not available");
        }
        unpublishPost(
            {
                postId: post?._id,
            },
            {
                onSuccess() {
                    toast.success("Post unpublished successfully.");
                },
                onError(error) {
                    toast.error(
                        error.message ||
                            "Unable to unpublish post at the moment."
                    );
                },
            }
        );
    };

    const handleToggleFeatured = () => {
        if (!post) {
            return toast.error("Post not available");
        }
        toggleFeatured(
            {
                postId: post?._id,
            },
            {
                onSuccess() {
                    toast.success("Post feature status toggled successfully.");
                },
                onError(error) {
                    toast.error(
                        error.message ||
                            "Unable to toggle feature post status at the moment."
                    );
                },
            }
        );
    };

    const handleDeletePost = () => {
        if (!post) {
            return toast.error("Post not available");
        }
        deletePost(
            {
                postId: post?._id,
            },
            {
                onSuccess() {
                    toast.success("Post deleted successfully.");
                },
                onError(error) {
                    toast.error(
                        error.message || "Unable to delete post at the moment."
                    );
                },
            }
        );
    };

    const handleCopyPostLink = () => {
        if (!post) {
            return toast.error("Unable to copy post link.");
        }
        navigator.clipboard
            .writeText(`${BlogPageLink}/${post.slug}`)
            .then(() => {
                console.log("Copied to clipboard!");
                toast.success("Post link copied!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    const handleMenuAction = (action: PostActionsModal) => {
        // close dropdown first by deferring to next event loop
        setTimeout(() => {
            setAction(action);
            setOpenModal(true);
        }, 0);
    };

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!post) {
        return <ErrorScreen />;
    }

    return (
        <div className="p-4 flex flex-col overflow-hidden h-full">
            <LoadingDialog
                open={
                    pendingDelete ||
                    pendingToggleFeatured ||
                    pendingPublish ||
                    pendingUnpublish
                }
            />
            <ConfirmDialog
                onConfirm={() => {
                    switch (action) {
                        case "delete":
                            handleDeletePost();
                            break;
                        case "publish":
                            handlePublishPost();
                            break;
                        case "unpublish":
                            handleUnpublishPost();
                            break;
                        case "toggleFeatured":
                            handleToggleFeatured();
                            break;
                        default:
                            toast.warning(
                                "Please select an action before proceeding."
                            );
                    }
                }}
            />
            <div className="flex items-center justify-between py-4 px-10">
                <h1>Post Details</h1>
                <div className="flex items-center gap-x-2">
                    {post.publishStatus === "DRAFT" ||
                    post.publishStatus === "UNPUBLISHED" ? (
                        <Button
                            disabled={pendingPublish}
                            onClick={() => {
                                handleMenuAction("publish");
                            }}
                        >
                            Publish Content
                        </Button>
                    ) : (
                        <div>
                            <Button
                                variant={"destructive"}
                                disabled={pendingUnpublish}
                                onClick={() => {
                                    handleMenuAction("unpublish");
                                }}
                            >
                                Unpublish Content
                            </Button>
                        </div>
                    )}

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <PiDotsThreeOutline />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link
                                    href={`/control-admin/posts/${post._id}/edit`}
                                >
                                    Edit Post
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    handleMenuAction("toggleFeatured");
                                }}
                            >
                                {post.isFeatured
                                    ? "Removed as Featured Post"
                                    : "Add to Featured Post"}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleCopyPostLink}>
                                Copy Post Link
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    handleMenuAction("delete");
                                }}
                            >
                                Delete Post
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="flex-1 overflow-y-scroll p-5 px-[20%]">
                <h2 className="font-outfit text-[42px] text-center mb-5">
                    {post.title}
                </h2>

                <div className="relative h-[400px] my-5">
                    <Image
                        className="object-contain"
                        alt="post"
                        fill
                        src={post.coverImage}
                    />
                </div>

                <div
                    className="[&_p]:mb-4 [&_h2]:mt-6 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:ml-6 [&_li]:mb-2"
                    dangerouslySetInnerHTML={{
                        __html: post.bodyHtml,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default PostPage;
