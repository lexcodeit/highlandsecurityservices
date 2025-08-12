"use client";
import { useJobId } from "@/lib/hooks/use-job-id";
import React from "react";

const JobDetailPage = () => {
    const jobId = useJobId();

    return <div>JobDetailPage {jobId}</div>;
};

export default JobDetailPage;
