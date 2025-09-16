"use client";
import BlogSection from "@/components/sections/blog-section";
import GetHiredSection from "@/components/sections/get-hired-section";
import ServicesSection from "@/components/sections/services-section";
import ValuesSection from "@/components/sections/values-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="h-[100vh] relative hero-cover">
                <div className="max-w-[1200px] mx-auto h-full flex justify-center">
                    <div className="pt-[100px] flex flex-col items-center gap-y-5">
                        <h3 className="mx-auto px-8 py-3 rounded-[8px] bg-white hero-button font-semibold">
                            #1 Security Provider App
                        </h3>
                        <h1 className="font-outfit font-bold text-[60px] text-center mb-1">
                            Book{" "}
                            <span className="gradient-header">
                                Professional
                            </span>{" "}
                            Security Services in Minutes
                        </h1>
                        <p className="text-center font-semibold text-2xl text-supporting-text">
                            Highland Security provides fully trained and vetted
                            guards for individuals, homes, businesses, and
                            events. With our seamless booking system,
                            professional protection is now faster and more
                            accessible than ever.
                        </p>
                        <div className="mx-auto w-full flex justify-center mt-4">
                            <Button className="font-semibold text-base py-4 px-8 z-10">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>

                <Image
                    src={"/assets/images/landing.svg"}
                    width={100}
                    height={100}
                    alt="landing-eagle"
                    className="absolute h-full w-1/2 top-0 right-0 object-cover"
                />
            </div>
            <div className="mx-auto max-w-[1200px] py-24 min-h-[100vh] relative">
                <h3 className="text-3xl text-header-text font-outfit font-semibold mb-10">
                    At Highland Security Services, we deliver trusted protection
                    for individuals, businesses, and events across Nigeria.
                </h3>
                <h3 className="text-3xl text-header-text font-outfit font-semibold">
                    Our team is built on discipline, integrity, and swift
                    response to your needs. From personal bodyguards to
                    industrial security, we’ve got you covered.
                </h3>

                <h1 className="absolute bottom-0 left-0 font-brush-script eagle-eye w-full">
                    Eagle Eye
                </h1>
            </div>

            <ServicesSection />
            <ValuesSection />
            <GetHiredSection />
            <BlogSection />
        </div>
    );
}
