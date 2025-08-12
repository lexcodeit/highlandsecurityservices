import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    link: string;
}

const CardTitle = ({ link, title }: Props) => {
    return (
        <div className="flex justify-between items-center p-4 border-b border-b-border">
            <h2 className="font-semibold text-sm">{title}</h2>
            <Link href={link}>
                <Button>View All</Button>
            </Link>
        </div>
    );
};

export default CardTitle;
