import Image from "next/image";
import React from "react";
import PerCategory from "./per-category";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { Doc } from "../../../../convex/_generated/dataModel";
import { formatTimeFn } from "@/utils/helpers";

interface Props {
    post: Doc<"posts"> & {
        category: Doc<"postCategories"> | null;
    };
}

const FeaturedPost = ({ post }: Props) => {
    const {
        postDate,
        category,
        title,
        slug,
        _creationTime,
        coverImage,
        shortBody,
    } = post;

    return (
        <div className="shadow bg-white rounded-[16px] overflow-hidden w-full h-fit flex flex-col">
            <div className="relative w-full h-[320px] sm:h-[400px]">
                <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="flex flex-col gap-y-3 p-4 flex-grow">
                <div className="flex items-center justify-between py-1">
                    <PerCategory category={category?.title || "General"} />

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

                <h3 className="font-outfit text-xl font-semibold">{title}</h3>
                <p className="text-supporting-text text-sm flex-grow">
                    {shortBody}
                </p>

                <Link
                    className="text-primary-gold text-sm font-medium flex items-center gap-x-1"
                    href={`/blog/${slug}`}
                >
                    Read More <FiArrowRight className="size-3" />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedPost;
