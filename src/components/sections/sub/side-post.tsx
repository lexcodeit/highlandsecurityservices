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

const SidePost = ({ post }: Props) => {
    const {
        category,
        postDate,
        coverImage,
        _creationTime,
        title,
        slug,
        shortBody,
    } = post;
    return (
        <div className="shadow bg-white rounded-[16px] p-4 mb-2">
            <Image
                src={coverImage}
                alt={title}
                width={400}
                height={200}
                className="rounded-lg w-full object-cover h-[180px]"
            />

            <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between py-2">
                    <PerCategory category={category!.title} />

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
                <div className="flex flex-col gap-y-1">
                    <h3 className="font-outfit text-lg font-semibold">
                        {title}
                    </h3>
                    <p className="text-supporting-text text-sm line-clamp-1">
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
        </div>
    );
};

export default SidePost;
