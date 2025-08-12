"use client";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/lib/features/auth/use-current-user";
import { useCompleteAccountModal } from "@/lib/stores/modals";
import { useAuthActions } from "@convex-dev/auth/react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

function CompleteAccount() {
    const [open, setOpen] = useCompleteAccountModal();
    const router = useRouter();
    const { data, isLoading } = useCurrentUser();
    const { signOut } = useAuthActions();

    const profile = useMemo(() => {
        return data;
    }, [data]);

    console.log("Data:", data);

    useEffect(() => {
        if (isLoading) return;
        if (!profile) {
            if (!open) {
                setOpen(true);
            }
        } else {
            setOpen(false);
        }
    }, [setOpen, open, profile, router, isLoading]);

    return (
        <div className="flex flex-col items-center h-full justify-center">
            <Loader className="animate-spin size-5" />
            {isLoading ? null : (
                <Button
                    className="mt-2"
                    onClick={() =>
                        signOut()
                            .then(() => {
                                router.replace("/");
                            })
                            .catch(err => {
                                console.log("Signout error:", err);
                            })
                    }
                >
                    Logout
                </Button>
            )}
        </div>
    );
}

export default CompleteAccount;
