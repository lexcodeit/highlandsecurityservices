"use client";
import EmptySection from "@/components/global/empty-section";
import LoaderComponent from "@/components/global/loader-component";
import CardTitle from "@/components/screens/admin/resusables/card-title";
import JobApplicationsRow from "@/components/tables/row-columns/job-applications-row";
import JobApplicationsHeader from "@/components/tables/row-headers/job-applications-header";
import { useGetDashboardData } from "@/lib/features/admin/use-get-dashboard-data";

const HighlandAdmin = () => {
    const { data, isLoading } = useGetDashboardData();

    return (
        <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md mb-4">
                    <CardTitle
                        title="Job Applications"
                        link="/control-admin/job-applications"
                    />
                    <div className="min-h-[300px]">
                        <JobApplicationsHeader />
                        {isLoading || !data ? (
                            <LoaderComponent />
                        ) : !data.jobApplications.length ? (
                            <EmptySection text="No registrations at the moment" />
                        ) : (
                            data.jobApplications.map(fighter => (
                                <JobApplicationsRow
                                    key={fighter._id}
                                    // fighter={fighter}
                                />
                            ))
                        )}
                    </div>
                </div>
                {/* Latest News */}
                <div className="bg-white rounded-lg shadow-md mb-4">
                    <CardTitle title="News Blog" link="/dashboard/news-blog" />
                    <div className="min-h-[300px]">
                        <EmptySection text="No blog contents at the moment" />
                    </div>
                </div>
                {/* Matches */}
                <div className="bg-white rounded-lg shadow-md mb-4">
                    <CardTitle
                        title="Registered Guards"
                        link="/control-admin/registered-guards"
                    />
                    <div className="min-h-[300px]">
                        <EmptySection text="No registered guards at the moment" />
                    </div>
                </div>
                {/* Ticket Sales */}
                <div className="bg-white rounded-lg shadow-md mb-4">
                    <CardTitle
                        title="Bookings"
                        link="/control-admin/guard-bookings"
                    />
                    <div className="min-h-[300px]">
                        <EmptySection text="No guard booked at the moment" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlandAdmin;
