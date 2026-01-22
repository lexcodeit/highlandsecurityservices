import Image from "next/image";
import React from "react";

const BodyguardHero = () => {
    return (
        <section
            className="relative pt-32 pb-20 overflow-hidden"
            style={{ backgroundColor: "#F5F5F5" }}
        >
            <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <h1 className="text-6xl lg:text-8xl font-bold font-outfit leading-tight mb-6">
                        Elite <br />{" "}
                        <span className="text-primary-gold">Protection</span>
                    </h1>
                    <p className="text-xl text-supporting-text max-w-md mb-8">
                        Our trained bodyguards provide discreet, 24/7 personal
                        protection for executives, VIPs, and high-profile
                        individuals. With professionalism and vigilance, we
                        ensure your safety in every environment.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-6 py-2 border border-slate-300 rounded-full text-sm font-bold uppercase tracking-widest">
                            24/7 Vigilance
                        </div>
                        <div className="px-6 py-2 border border-slate-300 rounded-full text-sm font-bold uppercase tracking-widest">
                            Discreet Ops
                        </div>
                    </div>
                </div>
                <div className="relative h-[600px] w-full">
                    <Image
                        src={`/assets/images/services/guards.jpg`}
                        fill
                        className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        alt="HSSL Bodyguard"
                    />
                </div>
            </div>
        </section>
    );
};

export default BodyguardHero;
