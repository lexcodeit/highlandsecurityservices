import React from "react";
import { PostListArr } from "@/utils/constants";
import SectionTitle from "@/components/global/frontend/section-title";
import FeaturedPost from "../sub/featured-post";
import SidePost from "../sub/side-post";

const BlogSection = () => {
    const mainPost = PostListArr[0];
    const arrayPosts = PostListArr.slice(1);

    return (
        <div>
            <SectionTitle
                subtitle="Stay informed with our latest articles, tips and company news. From security best practices to industry trends, our blog keeps you prepared and aware."
                title="Insights & Updates"
                buttonLink="/blog"
            />
            <div className="mx-auto max-w-[1200px] flex gap-x-10 p-2.5">
                <FeaturedPost post={mainPost} />
                <div>
                    {arrayPosts.map(post => {
                        return <SidePost post={post} key={post.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
