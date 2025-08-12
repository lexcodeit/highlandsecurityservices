"use client";
import DashboardTitle from "@/components/screens/admin/dashboard-title";
import React from "react";
import { useGetWorkspaceMembers } from "@/lib/features/workspaces/use-get-workspace-members";
import LoaderComponent from "@/components/global/loader-component";
import ErrorScreen from "@/components/global/error-screen";
import EmptySection from "@/components/global/empty-section";
import { Button } from "@/components/ui/button";
import { useInviteUserModal } from "@/lib/stores/modals";
import { WorkspaceMembersPageTab } from "@/utils/enums";
import PerWorkspaceTab from "@/components/screens/admin/per-workspace-tab";
import PerWorkspaceMember from "@/components/screens/admin/per-workspace-member";
import PerInvite from "@/components/screens/admin/per-invite";

const WorkspaceMembersScreen = () => {
    const [activeTab, setActiveTab] =
        React.useState<WorkspaceMembersPageTab>("members");
    const [, setOpenModal] = useInviteUserModal();

    const { data, isLoading } = useGetWorkspaceMembers();

    if (isLoading) return <LoaderComponent />;

    if (!data) return <ErrorScreen text="Workspace Members not found" />;

    const { adminMembersList, invites, normalMembersList } = data;

    const combinedMembersList = [...adminMembersList, ...normalMembersList];

    return (
        <div className="h-full flex flex-col p-4">
            <div className="">
                <DashboardTitle title="Workspace Members" />
            </div>
            <div className="flex-1 flex flex-col p-4 bg-white rounded-md">
                <div className="flex flex-row items-center space-x-2 border-b border-b-border">
                    <div className="flex-1 flex flex-row items-center space-x-2">
                        <PerWorkspaceTab
                            isActive={activeTab === "members"}
                            setActiveTab={setActiveTab}
                            tab="members"
                            title={`Active Members (${combinedMembersList.length})`}
                        />
                        <PerWorkspaceTab
                            isActive={activeTab === "invites"}
                            setActiveTab={setActiveTab}
                            tab="invites"
                            title={`Invites (${invites.length})`}
                        />
                    </div>
                    <Button onClick={() => setOpenModal(true)} className="mb-1">
                        Invite Member
                    </Button>
                </div>
                <div className="flex-1">
                    {activeTab === "members" ? (
                        combinedMembersList.length < 1 ? (
                            <EmptySection text="No Members" />
                        ) : (
                            combinedMembersList.map(member => (
                                <PerWorkspaceMember
                                    key={member._id}
                                    member={member}
                                />
                            ))
                        )
                    ) : invites.length < 1 ? (
                        <EmptySection text="No Invites" />
                    ) : (
                        invites.map(invite => (
                            <PerInvite key={invite._id} invite={invite} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkspaceMembersScreen;
