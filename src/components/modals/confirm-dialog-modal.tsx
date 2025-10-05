import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useConfirmModal } from "@/lib/stores/modals"; // you can later generalize your modal store

interface Props {
    title?: string;
    description?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const ConfirmDialog = ({
    title = "Are you sure?",
    description = "This might bring about irreversible changes.",
    onConfirm,
    onCancel,
}: Props) => {
    const [open, setOpen] = useConfirmModal(); // you may want a generic modal store later

    const handleClose = () => setOpen(false);

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
            return handleClose();
        }
        handleClose();
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
            return handleClose();
        }
        handleClose();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        variant="destructive"
                        className="text-white"
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmDialog;
