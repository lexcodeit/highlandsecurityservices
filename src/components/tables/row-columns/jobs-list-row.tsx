import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";

interface Props {
    title: string;
    uploaded: string;
    status: string;
    jobId: Id<"jobs">;
}

const JobsListRow = ({ status, title, uploaded, jobId }: Props) => {
    return (
        <div className="grid-cols-5 gap-x-4 border-b border-b-border table-body-row">
            <div className="table-col-body font-semibold text-header-text">
                {title}
            </div>
            <div className="table-col-body font-medium">{status}</div>
            <div className="table-col-body text-supporting-text">
                {uploaded}
            </div>
            <div className="table-col-body">
                <Link href={`/control-admin/jobs/${jobId}`}>
                    <Button variant={"outline"}>View</Button>
                </Link>
            </div>
        </div>
    );
};

export default JobsListRow;
