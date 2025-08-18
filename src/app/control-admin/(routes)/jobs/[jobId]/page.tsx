"use client";
import EmptySection from "@/components/global/empty-section";
import ErrorScreen from "@/components/global/error-screen";
import LoaderComponent from "@/components/global/loader-component";
import DashboardTitle from "@/components/screens/admin/dashboard-title";
import PerTab from "@/components/screens/admin/tabs/per-tab";
import { Button } from "@/components/ui/button";
import { useGetJobDetailById } from "@/lib/features/admin/jobs/use-get-job-detail";
import { useJobId } from "@/lib/hooks/use-job-id";
import { JobDetailsPageTab } from "@/utils/enums";
import React from "react";
import PerApplicant from "./per-applicant";
import JobOverview from "./job-overview";
import { useCreateRequirementModal } from "@/lib/stores/modals";

const JobDetailPage = () => {
    const [activeTab, setActiveTab] =
        React.useState<JobDetailsPageTab>("overview");
    const jobId = useJobId();
    const [, setOpenModal] = useCreateRequirementModal();

    const { data, isLoading } = useGetJobDetailById({
        jobId,
    });

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!data) {
        return <ErrorScreen />;
    }

    return (
        <div className="h-full flex flex-col p-4">
            <DashboardTitle title={`Job - ${data.job.title}`} />
            <div className="flex-1 flex flex-col p-4 bg-white rounded-md">
                <div className="flex flex-row items-center space-x-2 border-b border-b-border pb-1">
                    <div className="flex-1 flex flex-row items-center space-x-2">
                        <PerTab<JobDetailsPageTab>
                            isActive={activeTab === "overview"}
                            setActiveTab={setActiveTab}
                            tab="overview"
                            title={`Overview`}
                        />
                        <PerTab<JobDetailsPageTab>
                            isActive={activeTab === "applications"}
                            setActiveTab={setActiveTab}
                            tab="applications"
                            title={`Applications`}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            setOpenModal(true);
                        }}
                        className="mb-1"
                    >
                        Add Requirement
                    </Button>
                </div>
                <div className="flex-1">
                    {activeTab === "overview" ? (
                        <JobOverview
                            job={data.job}
                            requirements={data.requirements}
                        />
                    ) : activeTab === "applications" ? (
                        <div>
                            {data.applications.length < 1 ? (
                                <EmptySection text="No Applications Found" />
                            ) : (
                                data.applications.map(applicant => (
                                    <PerApplicant
                                        key={applicant._id}
                                        // invite={invite}
                                    />
                                ))
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;
