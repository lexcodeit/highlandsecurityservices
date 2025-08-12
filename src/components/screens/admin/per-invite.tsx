import React from "react";
import { formatTimeFn } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import { useResendInvite } from "@/lib/features/workspaces/use-resend-invite";
import { useRevokeInvite } from "@/lib/features/workspaces/use-revoke-invite";
import { toast } from "sonner";
import { Doc } from "../../../../convex/_generated/dataModel";

interface Props {
    invite: Doc<"workspaceInvites">;
}

const PerInvite = ({ invite }: Props) => {
    const { mutate: resend, isPending: loadingResend } = useResendInvite();
    const { mutate: revoke, isPending: loadingRevoke } = useRevokeInvite();

    const handleResend = () => {
        resend(
            { inviteId: invite._id },
            {
                onSuccess: () => {
                    toast.success("Invite resent successfully");
                },
                onError: error => {
                    console.log("Error resending invite:", error);
                    toast.error(error.message || "Error resending invite");
                },
            }
        );
    };

    const handleRevoke = () => {
        revoke(
            { inviteId: invite._id },
            {
                onSuccess: () => {
                    toast.success("Invite revoked successfully");
                },
                onError: error => {
                    console.log("Error revoking invite:", error);
                    toast.error(error.message || "Error revoking invite");
                },
            }
        );
    };

    return (
        <div className="p-4 flex items-center justify-between">
            <div>
                <p className="text-header-text mb-1">{invite.email}</p>
                <p className="text-body-text text-xs">
                    Invited {formatTimeFn(invite._creationTime)}
                </p>
            </div>
            <div className="flex flex-row items-center space-x-2 ">
                <Button
                    onClick={handleResend}
                    disabled={loadingResend}
                    variant={"outline"}
                >
                    Resend Invite
                </Button>
                <Button
                    onClick={handleRevoke}
                    disabled={loadingRevoke}
                    variant={"destructive"}
                    className="text-white"
                >
                    Revoke Invite
                </Button>
            </div>
        </div>
    );
};

export default PerInvite;
