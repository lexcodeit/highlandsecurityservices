import React from "react";
import { Doc } from "../../../../convex/_generated/dataModel";
import { JOB_POSITION_MAP } from "@/utils/maps";
import { PositionEnums } from "@/utils/enums";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
    job: Doc<"jobs">;
}

const PerPosition = ({ job }: Props) => {
    const icon = JOB_POSITION_MAP[job.slug as PositionEnums];

    return (
        <div className="shadow-lg bg-white rounded-xl p-3 w-[30%] py-5">
            <div className="flex items-center gap-x-4 mb-2">
                <Image
                    src={"/assets/images/" + icon.icon}
                    alt={job.slug}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] object-cover"
                />
                <div>
                    <h3 className="text-header-text text-lg font-semibold">
                        {job.title}
                    </h3>
                    <span className="text-supporting-text text-xs">
                        {job.location}
                    </span>
                </div>
            </div>

            <p className="text-sm text-supporting-text mb-2">
                {job.description}
            </p>

            <Link href={`/careers/${job.slug}`} className="w-full">
                <Button className="w-full" variant={"outline"}>
                    Learn More
                </Button>
            </Link>
        </div>
    );
};

export default PerPosition;
