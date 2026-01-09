import PerCategory from "@/components/sections/sub/per-category";
import { BlogPostType } from "@/lib/features/returnTypes";
import { formatTimeFn } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

interface Props {
    post: BlogPostType;
}

const PerBlogPost = ({ post }: Props) => {
    const {
        coverImage,
        title,
        category,
        shortBody,
        postDate,
        _creationTime,
        slug,
    } = post;

    return (
        <div className="bg-gray-50 shadow-sm border-border-color grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 p-4 rounded-md mb-6">
            {/* <div className="h-[300px] relative"> */}
            <Image
                width={300}
                height={300}
                src={coverImage}
                alt={title}
                className="object-contain w-full rounded-md"
            />
            {/* </div> */}
            <div className="flex flex-col gap-y-2">
                <h1 className="font-outfit mb-2">{title}</h1>

                <div className="flex flex-col lg:flex-row  lg:items-center justify-between py-2">
                    <div className="w-fit">
                        <PerCategory category={category!.title} />
                    </div>

                    <div className="flex items-center gap-x-2">
                        <IoCalendarOutline className="text-primary-gold" />
                        <p className="text-sm text-supporting-text">
                            {formatTimeFn(
                                postDate || _creationTime,
                                "DD MMM, YYYY"
                            )}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-supporting-text line-clamp-2">
                    {shortBody}
                </p>
                <Link
                    className="text-primary-gold text-sm font-medium flex items-center gap-x-1"
                    href={`/blog/${slug}`}
                >
                    Read More
                    <FiArrowRight className="size-3" />
                </Link>
            </div>
        </div>
    );
};

export default PerBlogPost;
