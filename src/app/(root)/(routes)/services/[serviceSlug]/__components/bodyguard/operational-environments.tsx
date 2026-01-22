const OperationalEnvironments = () => {
    const zones = [
        {
            title: "Executive Escort",
            desc: "Door-to-door protection for high-level corporate meetings and transit.",
        },
        {
            title: "Public Appearances",
            desc: "Crowd buffer and threat detection during events and media engagements.",
        },
        {
            title: "Domestic Residency",
            desc: "Dedicated protection for VIPs and families within private estates.",
        },
        {
            title: "Airport & Travel",
            desc: "Seamless safe-passage protocols from arrival to final destination.",
        },
    ];

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <h3 className="text-4xl font-bold font-outfit mb-16 text-center">
                    Coverage Areas
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {zones.map((zone, i) => (
                        <div
                            key={i}
                            className="p-10 border border-white/10 hover:bg-white/5 transition-colors"
                        >
                            <h4 className="text-primary-gold font-bold text-lg mb-4 underline underline-offset-8 decoration-1">
                                {zone.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {zone.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OperationalEnvironments;
