"use client";
import { serviceValues } from "@/utils/constants";
import React from "react";
import PerValue from "./per-value";
import Image from "next/image";
import EagleEyeApproach from "./eagle-eye-approach";
import ValuesSection from "@/components/sections/homepage/values-section";

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            <div className="about-hero relative h-screen flex items-center justify-center z-20">
                <Image
                    src={"/assets/images/about-hero.jpg"}
                    fill
                    // className="object-contain lg:object-cover object-bottom -z-10"
                    className="object-cover object-top lg:object-bottom -z-10"
                    alt="about-hero"
                />

                <div className="z-10 text-center w-[75%]">
                    <h1 className="text-primary-gold font-outfit text-[50px] lg:text-[100px] font-semibold">
                        Precision. Discipline. Protection.
                    </h1>
                    <p className=" lg:text-2xl font-medium text-off-white mx-auto w-full lg:w-[70%]">
                        We are Highland Security — trusted by corporations,
                        executives, and institutions to safeguard what matters
                        most.
                    </p>
                </div>
            </div>

            {/* The Eagle Eye Approach */}
            <EagleEyeApproach />
            <ValuesSection />

            <div className="relative pt-24 z-20">
                <div className="px-6 lg:px-24 py-24">
                    <div className="grid grid-cols-2 gap-6">
                        {serviceValues.map((value, index) => {
                            return (
                                <PerValue
                                    // index={index}
                                    // service={serviceProp}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
