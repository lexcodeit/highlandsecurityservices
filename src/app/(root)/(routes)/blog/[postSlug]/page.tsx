import { Metadata } from "next";
import PostPage from "./post-page";
import { notFound } from "next/navigation";
import { api } from "../../../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

type PageProps = {
    params: Promise<{ postSlug: string }>; // ✅ important: mark as Promise
};

// ✅ Generate OG & Twitter metadata server-side
export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { postSlug } = await params; // ✅ await the params to fix the Promise mismatch

    const postSsr = await fetchQuery(api.noAuth.blog.getPostContent, {
        postSlug,
    });

    if (!postSsr) return notFound();

    const postUrl = `${process.env.NEXT_PUBLIC_BLOG_PAGE_LINK}/${postSsr.slug}`;

    return {
        title: postSsr.title,
        description: postSsr.shortBody,
        openGraph: {
            title: postSsr.title,
            description: postSsr.shortBody,
            url: postUrl,
            siteName: "Rootlex Blog",
            images: [
                {
                    url: postSsr.coverImage,
                    width: 1200,
                    height: 630,
                    alt: postSsr.title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: postSsr.title,
            description: postSsr.shortBody,
            images: [postSsr.coverImage],
        },
    };
}

// ✅ Render your client component (it handles fetching, layout, etc.)
export default function Page() {
    return <PostPage />;
}
