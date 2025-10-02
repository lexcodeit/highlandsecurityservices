import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { formatTimeFn } from "@/utils/helpers";
import { PiDotsThreeVertical } from "react-icons/pi";

interface Props {
    title: string;
    slug: string;
    date: number;
    categoryId: Id<"postCategories">;
}

const PostCategoriesRow = ({ date, title, slug }: Props) => {
    return (
        <div className="grid-cols-5 gap-x-4 border-b border-b-border table-body-row">
            <div className="table-col-body font-semibold text-header-text">
                {title}
            </div>
            <div className="table-col-body font-medium">{slug}</div>
            <div className="table-col-body text-supporting-text">
                {formatTimeFn(date)}
            </div>
            <div className="table-col-body">
                <PiDotsThreeVertical />
            </div>
        </div>
    );
};

export default PostCategoriesRow;
