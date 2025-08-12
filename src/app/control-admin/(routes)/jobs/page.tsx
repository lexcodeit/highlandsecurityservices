"use client";
import EmptySection from "@/components/global/empty-section";
import LoaderComponent from "@/components/global/loader-component";
import JobsListRow from "@/components/tables/row-columns/jobs-list-row";
import JobsListHeader from "@/components/tables/row-headers/jobs-list-header";
import { Button } from "@/components/ui/button";
import { useGetJobsList } from "@/lib/features/admin/jobs/use-get-jobs";
import { useGetJobsCount } from "@/lib/features/admin/jobs/use-get-jobs-count";
import { Loader, PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ITEMS_PER_PAGE = 20;

const JobsPage = () => {
    const { results: jobs, status, loadMore } = useGetJobsList();

    const { data } = useGetJobsCount();

    const totalPages = data ? Math.ceil(data / ITEMS_PER_PAGE) : 0;

    console.log("Data:", data);

    return (
        <div className="p-4 h-full flex flex-col">
            <div className="mt-2 mb-6 flex flex-row items-center justify-between space-x-6">
                <div className="flex items-center gap-x-3">
                    <h2 className="font-bold text-2xl">Jobs List</h2>
                    {data === null || data === undefined ? (
                        <Loader className="animate-spin size-4" />
                    ) : (
                        <h2 className="font-semibold">({data})</h2>
                    )}
                </div>

                <Link
                    href={"/control-admin/create-job"}
                    className="flex items-center gap-x-2 bg-btn-color hover:bg-btn-hover text-white p-3 rounded-md px-5"
                >
                    <PlusIcon />
                    <span className="text-sm font-medium font-outfit">
                        Add New Job
                    </span>
                </Link>
            </div>
            <div className="flex-1 py-4">
                {status === "LoadingFirstPage" ? (
                    <LoaderComponent />
                ) : !jobs.length ? (
                    <EmptySection text="No jobs at the moment" />
                ) : (
                    <div className="flex-1 flex flex-col bg-white">
                        <JobsListHeader />
                        <div className="flex-1">
                            {jobs.map(job => {
                                return (
                                    <JobsListRow
                                        // user={user}
                                        key={job._id}
                                    />
                                );
                            })}
                        </div>
                        {totalPages ? (
                            <Button
                                onClick={() => {
                                    loadMore();
                                }}
                                disabled={
                                    status === "Exhausted" ||
                                    status === "LoadingMore"
                                }
                            >
                                Load More Jobs
                            </Button>
                        ) : null}
                    </div>
                )}
                <div></div>
            </div>
        </div>
    );
};

export default JobsPage;
