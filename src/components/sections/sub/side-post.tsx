import { PostProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";
import PerCategory from "./per-category";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

interface Props {
    post: PostProps;
}

const SidePost = ({ post }: Props) => {
    const { category, date, image, title, id, shortRead } = post;
    return (
        <div className="shadow bg-white rounded-[16px] p-4 mb-2">
            <Image
                src={`/assets/images/blogs/${image}`}
                alt={image}
                width={300}
                height={150}
                className="rounded-lg w-full object-cover h-[150px]"
            />

            <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between py-2">
                    <PerCategory category={category} />

                    <div className="flex items-center gap-x-2">
                        <IoCalendarOutline className="text-primary-gold" />
                        <p className="text-sm text-supporting-text">{date}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h3 className="font-outfit text-lg font-semibold">
                        {title}
                    </h3>
                    <p className="text-supporting-text text-sm">{shortRead}</p>
                    <Link
                        className="text-primary-gold text-sm font-medium flex items-center gap-x-1"
                        href={`/blog/${id}`}
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
