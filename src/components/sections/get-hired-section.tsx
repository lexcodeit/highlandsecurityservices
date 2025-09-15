import React from "react";
import SectionTitle from "../global/frontend/section-title";
import LoaderComponent from "../global/loader-component";
import ErrorScreen from "../global/error-screen";
import PerPosition from "./sub/per-position";
import { useGetLandingPageOpenJobs } from "@/lib/features/users/use-get-landing-page-open-jobs";

const GetHiredSection = () => {
    const { data, isLoading } = useGetLandingPageOpenJobs();

    return (
        <div>
            <SectionTitle
                subtitle="Join our dedicated security team and make a real difference. Explore our current job openings and apply in minutes."
                title="Open Positions"
            />
            <div className="mx-auto max-w-[1200px]">
                {isLoading ? (
                    <LoaderComponent />
                ) : !data ? (
                    <ErrorScreen />
                ) : (
                    <div className="flex gap-x-10">
                        {data.map(job => {
                            return <PerPosition job={job} key={job._id} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetHiredSection;
