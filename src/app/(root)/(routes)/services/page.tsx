"use client";
import { ServicesListArr } from "@/utils/constants";
import { SERVICES_MAP } from "@/utils/maps";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import PerService from "./per-service";

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <div className="relative h-screen pt-24 z-20 flex items-center justify-center">
                <div className="z-30 w-[90%] lg:w-1/2">
                    <h1 className="font-outfit text-center text-6xl font-bold text-primary-gold mb-10">
                        Our Services
                    </h1>
                    <p className="text-center text-off-white">
                        From personal protection to advanced surveillance, our
                        services are tailored to your needs. Explore each option
                        and secure trusted security solutions in just a few
                        clicks.
                    </p>
                </div>
                <div className="bg-gradient-to-b from-header-text to-off-white/10 z-20 absolute left-0 top-0 w-full h-full"></div>
                <video
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="/assets/videos/hero-section.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute left-1/2 bottom-2 text-off-white flex flex-col items-center w-24 h-24 -translate-x-1/2">
                    <HiOutlineChevronDown className="size-12 absolute top-3" />
                    <HiOutlineChevronDown className="size-8 absolute top-10" />
                </div>
            </div>

            <div className="px-6 lg:px-24 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {ServicesListArr.map((service, index) => {
                        const serviceProp = SERVICES_MAP[service];
                        return (
                            <PerService
                                index={index}
                                service={serviceProp}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
