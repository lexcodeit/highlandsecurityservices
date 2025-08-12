import DashboardTopBar from "@/components/screens/admin/dashboard-top-bar";
import Sidebar from "@/components/screens/admin/sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen w-screen flex bg-[#F9FAFB]">
            <Sidebar />
            <div className="flex-1 flex flex-col border-l border-l-muted">
                <DashboardTopBar />
                <div className="flex-1  overflow-hidden overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
