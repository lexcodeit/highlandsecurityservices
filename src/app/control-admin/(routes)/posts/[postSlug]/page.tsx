"use client";
import React from "react";
import { usePostSlug } from "@/lib/hooks/use-post-slug";
import { useGetPostContentBySlug } from "@/lib/features/admin/blog/use-get-post-content-by-slug";
import LoaderComponent from "@/components/global/loader-component";
import { Button } from "@/components/ui/button";
import ErrorScreen from "@/components/global/error-screen";
import Image from "next/image";

const PostPage = () => {
    const postSlug = usePostSlug();

    console.log("Post slug:", postSlug);

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
            <div className="flex items-center justify-between py-4">
                <h3>Post Details</h3>
                <div>
                    <Button>Publish Content</Button>
                </div>
            </div>

            <div className="flex-1 overflow-y-scroll p-5">
                <h2 className="font-outfit text-3xl mb-5">{post.title}</h2>

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
