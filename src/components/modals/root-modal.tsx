"use client";
import React, { useEffect, useState } from "react";
import CompleteAccountModal from "./complete-account-modal";
import InviteUserModal from "./invite-user-modal";

const RootModal = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <CompleteAccountModal />
            <InviteUserModal />
        </>
    );
};

export default RootModal;
