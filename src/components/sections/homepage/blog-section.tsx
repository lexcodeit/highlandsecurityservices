import React from "react";
import SectionTitle from "@/components/global/frontend/section-title";
import FeaturedPost from "../sub/featured-post";
import SidePost from "../sub/side-post";
import { useGetFeaturedPosts } from "@/lib/features/users/blog/use-get-featured-posts";
import LoaderComponent from "@/components/global/loader-component";
import ErrorScreen from "@/components/global/error-screen";
import EmptySection from "@/components/global/empty-section";

const BlogSection = () => {
    const { data: posts, isLoading } = useGetFeaturedPosts();

    const mainPost = posts && posts.length ? posts[0] : null;
    const arrayPosts = posts && posts.length ? posts.slice(1) : null;

    return (
        <div className="py-20">
            <SectionTitle
                subtitle="Stay informed with our latest articles, tips and company news. From security best practices to industry trends, our blog keeps you prepared and aware."
                title="Insights & Updates"
                buttonLink="/blog"
            />
            <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 p-2.5">
                {isLoading ? (
                    <LoaderComponent />
                ) : !posts ? (
                    <ErrorScreen />
                ) : !posts.length ? (
                    <div className="flex flex-col items-center py-6 w-full">
                        <EmptySection text="No blog posts at the moment." />
                    </div>
                ) : (
                    <>
                        {mainPost ? <FeaturedPost post={mainPost} /> : null}
                        {arrayPosts?.length ? (
                            <div className="flex flex-col gap-4">
                                {arrayPosts.map(post => (
                                    <SidePost post={post} key={post._id} />
                                ))}
                            </div>
                        ) : null}
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogSection;
