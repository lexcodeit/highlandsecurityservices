import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const FeatureSpotlight = () => {
    return (
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Mockup */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary-gold/20 blur-3xl rounded-full" />
                    <div className="relative border-8 border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        {/* Use one of the keywords above to find an image for here */}
                        <Image
                            src="/assets/images/patrol-app-mockup.jpg"
                            alt="Highland Patrol App"
                            width={400}
                            height={800}
                            className="object-cover w-full"
                        />
                    </div>
                </div>

                {/* Right Side: Copy */}
                <div className="space-y-6">
                    <Badge className="bg-primary-gold text-black font-bold">
                        DIGITAL PATROL SYSTEM
                    </Badge>
                    <h2 className="text-4xl font-bold font-outfit">
                        Zero Blind Spots. <br />
                        <span className="text-primary-gold">
                            Total Accountability.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Our guards use the latest checkpoint technology to
                        ensure your premises are fully covered. No more
                        "guessing" if a patrol was completed.
                    </p>

                    <div className="grid gap-4 pt-4">
                        {[
                            "Time-stamped Patrol Logs",
                            "Live GPS Location Verification",
                            "Instant Digital Incident Reports",
                            "Photo Evidence Documentation",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-primary-gold rounded-full" />
                                <span className="font-medium text-slate-200">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSpotlight;
