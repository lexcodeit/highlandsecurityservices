import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Loader2 } from "lucide-react"; // or any spinner icon you prefer

interface Props {
    loadingText?: string;
    open: boolean;
}

const LoadingDialog = ({
    loadingText = "Loading, please wait...",
    open,
}: Props) => {
    return (
        <Dialog open={open}>
            <DialogContent className="flex flex-col items-center justify-center space-y-4 bg-white">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <DialogHeader>
                    <DialogTitle className="text-center text-gray-700">
                        {loadingText}
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default LoadingDialog;
