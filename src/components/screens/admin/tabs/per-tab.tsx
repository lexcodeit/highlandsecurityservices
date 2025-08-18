import { cn } from "@/lib/utils";
import React from "react";

interface PerTabProps<T extends string | number> {
    title: string;
    tab: T;
    setActiveTab: React.Dispatch<React.SetStateAction<T>>;
    isActive: boolean;
}

function PerTab<T extends string | number>({
    title,
    tab,
    setActiveTab,
    isActive,
}: PerTabProps<T>) {
    return (
        <div
            className={cn(
                "p-3 rounded-md text-center cursor-pointer transition relative"
            )}
            onClick={() => setActiveTab(tab)}
        >
            <p
                className={cn(
                    "text-sm",
                    isActive
                        ? "text-header-text font-bold"
                        : "text-muted-foreground"
                )}
            >
                {title}
            </p>
            {isActive && (
                <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-primary rounded-lg" />
            )}
        </div>
    );
}

export default PerTab;
