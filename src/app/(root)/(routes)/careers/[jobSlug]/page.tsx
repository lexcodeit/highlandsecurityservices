"use client";
import ErrorScreen from "@/components/global/error-screen";
import LoaderComponent from "@/components/global/loader-component";
import { useGetJobDetailBySlug } from "@/lib/features/users/use-get-job-detail-by-slug";
import { useJobSlug } from "@/lib/hooks/use-job-slug";
import React from "react";
import PerTab from "@/components/screens/admin/tabs/per-tab";
import { JobDetailsPageTab } from "@/utils/enums";
import RoleOverview from "./role-overview";
import ApplicationForm from "./application-form";

const JobDetailPage = () => {
    const [activeTab, setActiveTab] =
        React.useState<JobDetailsPageTab>("overview");

    const jobSlug = useJobSlug();

    const { data, isLoading } = useGetJobDetailBySlug({
        jobSlug,
    });

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (!data) {
        return <ErrorScreen />;
    }

    const { job, requirements } = data;

    return (
        <div className="container">
            <div className="pt-10 mb-10">
                <h1 className="text-header-text text-2xl font-semibold mb-2">
                    {job.title} - {job.label}
                </h1>

                <p>{job.location}</p>
            </div>
            <div className="flex-1 flex flex-row items-center space-x-2">
                <PerTab<JobDetailsPageTab>
                    isActive={activeTab === "overview"}
                    setActiveTab={setActiveTab}
                    tab="overview"
                    title={`Role Overview`}
                />
                <PerTab<JobDetailsPageTab>
                    isActive={activeTab === "applications"}
                    setActiveTab={setActiveTab}
                    tab="applications"
                    title={`Application Form`}
                />
            </div>
            <div>
                <div className="flex-1">
                    {activeTab === "overview" ? (
                        <RoleOverview
                            description={job.description}
                            requirements={requirements}
                            location={job.location}
                        />
                    ) : activeTab === "applications" ? (
                        <div>
                            <ApplicationForm roleId={job._id} />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;
