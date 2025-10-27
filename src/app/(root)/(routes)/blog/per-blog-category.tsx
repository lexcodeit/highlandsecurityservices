import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    text: string;
    onClick: () => void;
    isActive: boolean;
}

const PerBlogCategory = ({ onClick, text, isActive }: Props) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                " rounded-full  py-2 cursor-pointer px-6",
                isActive ? " border border-primary-gold" : "bg-transparent"
            )}
        >
            <p
                className={cn(
                    "text-header-text font-semibold font-outfit",
                    isActive ? "text-primary-gold" : "text-supporting-text"
                )}
            >
                {text.split(" ")[0]}
            </p>
        </div>
    );
};

export default PerBlogCategory;
