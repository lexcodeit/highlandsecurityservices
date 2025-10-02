import React from "react";

interface Props {
    category: string;
}

const PerCategory = ({ category }: Props) => {
    return (
        <div className="bg-primary-gold px-2.5 py-1 text-xs text-header-text rounded-full">
            {category}
        </div>
    );
};

export default PerCategory;
