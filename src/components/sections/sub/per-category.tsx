import { PostCategoryEnums } from "@/utils/enums";
import React from "react";

interface Props {
    category: PostCategoryEnums;
}

const PerCategory = ({ category }: Props) => {
    return (
        <div className="bg-primary-gold px-2.5 py-1 text-xs text-header-text rounded-full">
            {category}
        </div>
    );
};

export default PerCategory;
