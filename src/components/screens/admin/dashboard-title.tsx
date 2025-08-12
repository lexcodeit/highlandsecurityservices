import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    subtitle?: string;
    onClick?: () => void;
    link?: string;
    btnText?: string;
}

const DashboardTitle = ({ btnText, link, onClick, title, subtitle }: Props) => {
    return (
        <div className="mt-2 mb-4 flex justify-between items-center">
            <div>
                <h2 className="font-bold text-lg">{title}</h2>
                {subtitle ? (
                    <p className="text-supporting-text font-medium max-w-[60%] text-sm">
                        {subtitle}
                    </p>
                ) : null}
            </div>
            {link ? (
                <Link href={link}>
                    <Button>{btnText || "Action"}</Button>
                </Link>
            ) : null}
            {onClick ? (
                <Button onClick={onClick}>{btnText || "Action"}</Button>
            ) : null}
        </div>
    );
};

export default DashboardTitle;
