import React from "react";
import SectionTitle from "../global/frontend/section-title";
import { ValueListArr } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ValuesSection = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            <SectionTitle
                title="Why Choose Eagle Eye Security"
                subtitle="We go beyond standard security. With years of proven expertise, professional personnel, and a commitment to vigilance, we deliver protection you can trust — anytime, anywhere."
            />
            <div className="relative flex gap-x-10 w-[200vw] px-20">
                {ValueListArr.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center border border-border-color gap-x-10 p-5"
                            )}
                        >
                            {/* <div className="relative w-[600px] h-[500px] overflow-hidden rounded-lg">
                                <Image
                                    alt={value.count}
                                    src={`/assets/images/values/${value.image}`}
                                    fill
                                    className="object-cover scale-60"
                                />
                            </div> */}
                            <Image
                                alt={value.count}
                                src={`/assets/images/values/${value.image}`}
                                width={500}
                                height={400}
                                className="object-cover w-[400px] rounded-lg"
                            />
                            <div className="">
                                <h4 className="font-outfit text-xl font-semibold">
                                    ({value.count})
                                </h4>
                                <h3 className="font-outfit text-xl font-semibold">
                                    {value.title}
                                </h3>
                                <p>{value.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ValuesSection;
