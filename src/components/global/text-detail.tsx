import { cn } from "@/lib/utils";
import React, { FunctionComponent } from "react";

const TextDetail = ({
    label,
    value,
    className,
    TextComponent,
    addColumn = false,
}: {
    label: string;
    value?: string;
    className?: string;
    TextComponent?: FunctionComponent;
    addColumn?: boolean;
}) => {
    return (
        <div className={cn("flex-1 flex flex-col space-y-1 py-2", className)}>
            <label className="text-sm font-medium text-supporting-text">
                {label}
                {addColumn ? ":" : null}
            </label>
            {TextComponent ? (
                <TextComponent />
            ) : (
                <h4 className="text-header-text font-medium break-all text-sm">
                    {value}
                </h4>
            )}
        </div>
    );
};

export default TextDetail;
