import React from "react";
import { Doc, Id } from "../../../../../../convex/_generated/dataModel";
import { Edit, TrashIcon } from "lucide-react";
import { useActiveRequirementId } from "@/lib/stores/url-states";
import DeleteRequirementModal from "@/components/modals/delete-requirement-modal";
import { useDeleteRequirementModal } from "@/lib/stores/modals";

interface Props {
    requirement: Doc<"jobListingRequirements">;
    index: number;
}

const PerRequirement = ({ requirement, index }: Props) => {
    const [activeRequirementId, setActiveRequirementId] =
        useActiveRequirementId();
    const [, setOpenDelete] = useDeleteRequirementModal();

    return (
        <>
            {activeRequirementId ? (
                <DeleteRequirementModal
                    requirementId={
                        activeRequirementId as Id<"jobListingRequirements">
                    }
                />
            ) : null}

            <div className="border border-border-color bg-white p-3 flex items-center gap-x-4 rounded-md mb-4 hover:bg-light-bg">
                <p className="flex-1">
                    <b>{index}.</b> {requirement.requirement}
                </p>

                <div className="flex items-center gap-x-2">
                    <Edit className="text-primary-gold size-6" />
                    <TrashIcon
                        onClick={() => {
                            setOpenDelete(true);
                            setActiveRequirementId(requirement._id);
                        }}
                        className="text-error size-6 cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
};

export default PerRequirement;
