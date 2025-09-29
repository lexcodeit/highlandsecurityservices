import React, { useState } from "react";
import { SERVICES_MAP } from "@/utils/maps";
import { ServicesListArr } from "@/utils/constants";
import { ServicesEnums } from "@/utils/enums";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "@/components/global/frontend/section-title";

const ServicesSection = () => {
    const [activeService, setActiveService] =
        useState<ServicesEnums>("bodyguard");

    return (
        <div className="min-h-screen flex flex-col">
            <SectionTitle
                title="Explore our Services"
                subtitle="From personal protection to advanced surveillance, our services are tailored to your needs. Explore each option and secure trusted security solutions in just a few clicks."
            />
            <div className="relative h-[1000px] flex gap-x-8">
                <div className="px-5 py-4 absolute left-[10%] top-[10%]">
                    {ServicesListArr.map(serviceHeader => {
                        const serviceProp = SERVICES_MAP[serviceHeader];
                        const activeServiceSection =
                            activeService === serviceHeader;
                        return (
                            <div
                                key={serviceHeader}
                                className="flex items-center gap-x-3"
                            >
                                <div
                                    className={cn(
                                        "w-4 h-4 bg-primary-gold rounded-full",
                                        activeServiceSection
                                            ? "bg-primary-gold"
                                            : "bg-transparent"
                                    )}
                                ></div>
                                <h3
                                    className={cn(
                                        "text-lg",
                                        activeServiceSection
                                            ? "text-header-text font-bold"
                                            : "text-supporting-text font-normal"
                                    )}
                                >
                                    {serviceProp.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <div className="absolute top-10 left-1/2 w-[600px]">
                    {ServicesListArr.map((service, index) => {
                        const serviceProp = SERVICES_MAP[service];
                        const activeServiceSection = activeService === service;
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveService(service)}
                                className={cn(
                                    "absolute top-0 left-0 border border-border-color p-8 bg-off-white flex flex-col gap-y-4 rounded-lg",
                                    activeServiceSection
                                        ? "active-service z-20"
                                        : "-z-0"
                                )}
                            >
                                <h3 className="font-outfit text-xl font-semibold">
                                    {serviceProp.title}
                                </h3>

                                <div className="relative w-[500px] h-[500px] overflow-hidden rounded-lg">
                                    <Image
                                        alt={service}
                                        src={`/assets/images/services/${serviceProp.image}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p>{serviceProp.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
