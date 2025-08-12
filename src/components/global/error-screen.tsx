"use client";
import { TriangleAlertIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

interface Props {
    text?: string;
    shouldLogout?: boolean;
}

const ErrorScreen = ({ text, shouldLogout }: Props) => {
    const { signOut } = useAuthActions();
    const router = useRouter();
    const handleSignOut = () => {
        signOut().then(() => {
            router.replace("/");
        });
    };
    return (
        <div className="flex flex-col space-y-2 justify-center items-center">
            <TriangleAlertIcon size={24} className="text-red-color" />
            <p className="text-sm font-bold text-red-color">
                {text || "An error occured. Please try again later"}
            </p>
            {shouldLogout ? (
                <Button onClick={handleSignOut}>Logout </Button>
            ) : null}
        </div>
    );
};

export default ErrorScreen;
