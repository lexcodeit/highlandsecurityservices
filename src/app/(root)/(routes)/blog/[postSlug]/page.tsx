"use client";
import React from "react";
import { usePostSlug } from "@/lib/hooks/use-post-slug";
import LoaderComponent from "@/components/global/loader-component";
import ErrorScreen from "@/components/global/error-screen";
import Image from "next/image";
import { useGetPostContentBySlug } from "@/lib/features/users/blog/use-get-post-content-by-slug";
import { formatTimeFn } from "@/utils/helpers";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineFolder } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PostPage = () => {
    const postSlug = usePostSlug();

    const { data: post, isLoading } = useGetPostContentBySlug({
        postSlug: postSlug as string,
    });

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!post) {
        return <ErrorScreen />;
    }

    return (
        <div className="p-4 flex flex-col overflow-hidden h-full">
            <div className="flex items-center justify-between py-4 px-10">
                <div className="flex-1 overflow-y-scroll p-5 px-[20%]">
                    <h2 className="font-outfit text-[42px] text-center mb-5">
                        {post.title}
                    </h2>

                    <div className="border-y border-y-border-color py-4 flex justify-between items-center my-10">
                        <div className="flex items-center gap-x-4">
                            <MdOutlineFolder className="size-8 text-primary-gold" />
                            <h3 className="text-supporting-text font-medium text-sm">
                                {post.category.title}
                            </h3>
                        </div>

                        <div className="flex items-center gap-x-8">
                            <p className="text-supporting-text text-sm">
                                {formatTimeFn(
                                    post.postDate || post._creationTime
                                )}
                            </p>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <IoShareOutline className="size-8 cursor-pointer text-primary-gold" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Copy Post Link
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Share on X
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Share on Facebook
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Share on Instagram
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

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
        </div>
    );
};

export default PostPage;
