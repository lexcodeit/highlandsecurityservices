"use client";
import BlogSection from "@/components/sections/blog-section";
import GetHiredSection from "@/components/sections/get-hired-section";
import JobStepsSection from "@/components/sections/jobs-steps-section";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <div className="h-[85vh]">
                <div className="max-w-[1200px] mx-auto h-full flex items-center justify-center">
                    <div>
                        <h1 className="font-outfit font-bold text-[60px] text-center mb-1">
                            Book Professional Security Services in Minutes
                        </h1>
                        <p className="text-center font-semibold text-2xl text-supporting-text">
                            From bodyguards to CCTV installations — fast,
                            secure, reliable.
                        </p>
                        <div className="mx-auto w-full flex justify-center mt-4">
                            <Button className="font-semibold text-base py-6 px-6">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[1200px] py-10">
                <h3 className="text-3xl text-header-text font-outfit font-semibold mb-10">
                    At Highland Security Services, we deliver trusted protection
                    for individuals, businesses, and events across Nigeria.
                </h3>
                <h3 className="text-3xl text-header-text font-outfit font-semibold">
                    Our team is built on discipline, integrity, and swift
                    response to your needs. From personal bodyguards to
                    industrial security, we’ve got you covered.
                </h3>
            </div>

            <JobStepsSection />
            <GetHiredSection />
            <BlogSection />
        </div>
    );
}
