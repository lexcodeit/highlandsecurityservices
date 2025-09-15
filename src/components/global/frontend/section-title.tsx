import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    subtitle: string;
    buttonLink?: string;
}

const SectionTitle = ({ subtitle, title, buttonLink }: Props) => {
    return (
        <div className="py-12 ">
            <div className="mx-auto max-w-[1200px] flex items-center">
                <div>
                    <h2 className="text-header-text font-outfit text-[48px] font-bold max-w-[80%]">
                        {title}
                    </h2>
                    <p className="text-supporting-text max-w-[60%] text-xl ">
                        {subtitle}
                    </p>
                </div>
                <div>
                    {buttonLink ? (
                        <Link href={buttonLink}>
                            <Button variant={"outline"}>View More</Button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
