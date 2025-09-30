import React, { useRef, useState } from "react";
import { SERVICES_MAP } from "@/utils/maps";
import { ServicesListArr } from "@/utils/constants";
import { ServicesEnums } from "@/utils/enums";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "@/components/global/frontend/section-title";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ServicesSection = () => {
    const [activeService, setActiveService] =
        useState<ServicesEnums>("bodyguard");

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "23% top",
            end: `+=${ServicesListArr.length * 700}px`, // scroll length
            pin: true,
            scrub: true,
            // markers: true,
            onUpdate: self => {
                const progress = self.progress; // 0 → 1
                const index = Math.floor(progress * ServicesListArr.length);
                const clampedIndex = Math.min(
                    index,
                    ServicesListArr.length - 1
                );

                const newService = ServicesListArr[clampedIndex];
                console.log("New service:", newService);
                console.log("Active service:", activeService);
                setActiveService(prev => {
                    if (prev !== newService) {
                        console.log(
                            "Updating service from",
                            prev,
                            "to",
                            newService
                        );
                        return newService;
                    }
                    return prev;
                });
            },
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col" ref={containerRef}>
            <SectionTitle
                title="Explore our Services"
                subtitle="From personal protection to advanced surveillance, our services are tailored to your needs. Explore each option and secure trusted security solutions in just a few clicks."
            />
            <div className="relative h-[700px] flex gap-x-8">
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

                <div className="absolute top-10 left-1/2 w-auto">
                    {ServicesListArr.map((service, index) => {
                        const serviceProp = SERVICES_MAP[service];
                        const activeServiceSection = activeService === service;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "absolute top-0 left-0 border border-border-color p-8 bg-off-white flex flex-col gap-y-4 rounded-lg transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
                                    activeServiceSection
                                        ? "z-20 opacity-100 translate-y-0 scale-100"
                                        : "z-0 opacity-0 translate-y-6 scale-95"
                                )}
                            >
                                <h3
                                    className={cn(
                                        "font-outfit text-xl font-semibold transition-all duration-500",
                                        activeServiceSection
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                >
                                    {serviceProp.title}
                                </h3>

                                <div
                                    className={cn(
                                        "relative w-[400px] h-[350px] overflow-hidden rounded-lg transition-transform duration-700 ease-out",
                                        activeServiceSection
                                            ? "translate-y-0"
                                            : "translate-y-6"
                                    )}
                                >
                                    <Image
                                        alt={service}
                                        src={`/assets/images/services/${serviceProp.image}`}
                                        fill
                                        className="object-cover"
                                        sizes="200"
                                    />
                                </div>
                                <p
                                    className={cn(
                                        "text-supporting-text transition-opacity duration-700 delay-150",
                                        activeServiceSection
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                >
                                    {serviceProp.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
