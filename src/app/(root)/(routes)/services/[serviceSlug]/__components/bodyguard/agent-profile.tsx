import React from "react";

const AgentProfile = () => {
    const specs = [
        { label: "Background", val: "Ex-Military / Law Enforcement" },
        { label: "Vetting", val: "Comprehensive Criminal & DMV Check" },
        { label: "Training", val: "High-Instinct Tactical Response" },
        { label: "Ethics", val: "Strict Confidentiality Agreements" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 border-y border-slate-100 py-16">
                    <div className="lg:col-span-4">
                        <h3 className="text-3xl font-bold font-outfit mb-4">
                            The HSSL Agent <br />
                            Standard
                        </h3>
                        <p className="text-supporting-text italic">
                            "Recruiting and retaining the best and the brightest
                            from traditional labor markets."
                        </p>
                    </div>
                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
                        {specs.map((spec, i) => (
                            <div key={i} className="group">
                                <p className="text-primary-gold font-bold text-sm uppercase tracking-tighter mb-1">
                                    {spec.label}
                                </p>
                                <p className="text-xl font-bold text-header-text group-hover:translate-x-2 transition-transform">
                                    {spec.val}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AgentProfile;
