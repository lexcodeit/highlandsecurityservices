import React from "react";
import SectionTitle from "../global/frontend/section-title";
import { useGetOpenJobs } from "@/lib/features/users/use-get-open-jobs";
import LoaderComponent from "../global/loader-component";
import ErrorScreen from "../global/error-screen";
import PerPosition from "./sub/per-position";

const GetHiredSection = () => {
    const { data, isLoading } = useGetOpenJobs();

    return (
        <div>
            <SectionTitle
                subtitle="Join our dedicated security team and make a real difference. Explore our current job openings and apply in minutes."
                title="Get Hired"
            />
            <div className="mx-auto max-w-[1200px]">
                {isLoading ? (
                    <LoaderComponent />
                ) : !data ? (
                    <ErrorScreen />
                ) : (
                    <div className="flex">
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
