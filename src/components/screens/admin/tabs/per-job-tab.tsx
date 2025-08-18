import { cn } from "@/lib/utils";
import { WorkspaceMembersPageTab } from "@/utils/enums";
import React from "react";

interface Props {
    title: string;
    tab: WorkspaceMembersPageTab;
    setActiveTab: React.Dispatch<React.SetStateAction<WorkspaceMembersPageTab>>;
    isActive: boolean;
}

const PerWorkspaceTab = ({ tab, setActiveTab, title, isActive }: Props) => {
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
            {isActive ? (
                <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-primary rounded-lg"></div>
            ) : null}
        </div>
    );
};

export default PerWorkspaceTab;
