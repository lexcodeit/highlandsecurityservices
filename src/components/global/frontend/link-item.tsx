import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
    isActive: boolean;
    url: string;
    text: string;
}

const LinkItem = ({ isActive, text, url }: Props) => {
    return (
        <Link
            href={url}
            className={cn(
                "nav-link rounded-md  ",
                isActive ? "text-primary-gold" : "text-supporting-text"
            )}
        >
            {text}
        </Link>
    );
};

export default LinkItem;
