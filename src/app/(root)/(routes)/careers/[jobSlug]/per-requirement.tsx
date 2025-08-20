import React from "react";
import { Doc } from "../../../../../../convex/_generated/dataModel";

interface Props {
    requirement: Doc<"jobListingRequirements">;
    index: number;
}

const PerRequirement = ({ requirement, index }: Props) => {
    return (
        <>
            <div className="border border-border-color bg-white p-3 flex items-center gap-x-4 rounded-md mb-4 hover:bg-light-bg">
                <p className="flex-1">
                    <b>{index}.</b> {requirement.requirement}
                </p>
            </div>
        </>
    );
};

export default PerRequirement;
