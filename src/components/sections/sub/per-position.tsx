import React from "react";
import { Doc } from "../../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
    job: Doc<"jobs">;
}

const PerPosition = ({ job }: Props) => {
    return (
        <div className=" bg-white rounded-xl px-6 flex-1 py-8 border border-border">
            <div className="flex items-center gap-x-4 mb-4 justify-between">
                <div>
                    <h3 className="text-header-text text-lg font-semibold">
                        {job.title}
                    </h3>
                    <span className="text-supporting-text text-xs">
                        {job.location}
                    </span>
                </div>

                <div>
                    <Link href={`/careers/${job.slug}`} className="w-full">
                        <Button className="w-full" variant={"outline"}>
                            Apply Now
                        </Button>
                    </Link>
                </div>
            </div>

            <p className="text-sm text-supporting-text mb-2">
                {job.shortDescription}
            </p>
        </div>
    );
};

export default PerPosition;
