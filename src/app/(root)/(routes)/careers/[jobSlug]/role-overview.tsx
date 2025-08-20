import React from "react";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import TextDetail from "@/components/global/text-detail";
import PerRequirement from "./per-requirement";

interface Props {
    requirements: Doc<"jobListingRequirements">[];
    description: string;
    location: string;
}

const RoleOverview = ({ description, location, requirements }: Props) => {
    return (
        <div className="p-4">
            <div className="mb-5">
                <TextDetail label="Description" value={description} />
                <TextDetail label="Location" value={location} />
            </div>

            <div>
                <h2 className="font-semibold text-lg text-header-text mb-4">
                    Job Requirements
                </h2>
                {requirements.map((requirement, index) => {
                    return (
                        <PerRequirement
                            requirement={requirement}
                            key={requirement._id}
                            index={index + 1}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RoleOverview;
