import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
    label: string;
    icon: IconType | LucideIcon;
    url: string;
    isActive: boolean;
}

const SidebarItem = ({ icon: Icon, url, label, isActive }: Props) => {
    return (
        <Button
            variant={"transparent"}
            asChild
            className={cn(
                " py-3 mb-2 justify-start w-full rounded-lg group hover:bg-sec-btn-hover",
                isActive && "bg-primary-gold"
            )}
        >
            <Link href={`/control-admin${url}`}>
                <Icon
                    className={cn(
                        "size-5 mr-2 text-supporting-text group-hover:text-secondary",
                        isActive && "text-black"
                    )}
                />
                <p
                    className={cn(
                        "truncate text-xs font-medium block text-supporting-text group-hover:text-white",
                        isActive && "text-black"
                    )}
                >
                    {label}
                </p>
            </Link>
        </Button>
    );
};

export default SidebarItem;
