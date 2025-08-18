import React from "react";
import { Id } from "../../../convex/_generated/dataModel";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { useDeleteRequirementModal } from "@/lib/stores/modals";
import { useActiveRequirementId } from "@/lib/stores/url-states";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useDeleteRequirement } from "@/lib/features/admin/requirements/use-delete-requirement";

interface Props {
    requirementId: Id<"jobListingRequirements">;
}

const DeleteRequirementModal = ({ requirementId }: Props) => {
    const [, setActiveRequirementId] = useActiveRequirementId();
    const [open, setOpen] = useDeleteRequirementModal();

    const { mutate, isPending } = useDeleteRequirement();

    const handleClose = () => {
        setActiveRequirementId(null);
        setOpen(false);
    };

    const handleDelete = () => {
        mutate(
            {
                requirementId,
            },
            {
                onSuccess: () => {
                    // Handle success
                    toast.success("Requirement deleted successfully");
                    handleClose();
                },
                onError: error => {
                    // Handle error
                    toast.error(
                        error.message || "Failed to delete requirement."
                    );
                },
            }
        );
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Delete Requirement</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this requirement?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={"outline"} onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        disabled={isPending}
                        onClick={handleDelete}
                        variant={"destructive"}
                        className="text-white"
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteRequirementModal;
