import TextDetail from "@/components/global/text-detail";
import React from "react";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import PerRequirement from "./per-requirement";
import CreateRequirementModal from "@/components/modals/create-requirement-modal";

interface Props {
    job: Doc<"jobs">;
    requirements: Doc<"jobListingRequirements">[];
}

const JobOverview = ({ job, requirements }: Props) => {
    return (
        <>
            <CreateRequirementModal jobId={job._id} jobTitle={job.title} />
            <div className="p-4">
                <div className="mb-5">
                    <TextDetail label="Title" value={job.title} />
                    <TextDetail label="Slug" value={job.slug} />
                    <TextDetail label="Label" value={job.label} />
                    <TextDetail label="Description" value={job.description} />
                    <TextDetail label="Location" value={job.location} />
                </div>

                <div>
                    <h2 className="font-semibold text-lg text-header-text mb-4">
                        Listed Job Requirements
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
        </>
    );
};

export default JobOverview;
