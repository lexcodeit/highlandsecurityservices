const TacticalProcess = () => {
    const steps = [
        {
            label: "Threat Assessment",
            title: "Custom Security Plan",
            desc: "We analyze your specific circumstances to design a Host of Security options suited to your risk level.",
        },
        {
            label: "Deployment",
            title: "Discreet Protection",
            desc: "Elite agents are deployed, backed by institutional knowledge and intense training.",
        },
        {
            label: "Supervision",
            title: "Real-Time Oversight",
            desc: "Field Supervisors and 24/7 Dispatch ensure your protection detail exceeds expectations.",
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-[1200px] mx-auto px-6">
                <h3 className="text-3xl font-bold font-outfit mb-16 underline decoration-primary-gold decoration-4 underline-offset-8">
                    The Engagement Process
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100"
                        >
                            <span className="absolute -top-4 left-8 bg-primary-gold text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                                {step.label}
                            </span>
                            <h4 className="text-xl font-bold mb-4 mt-2 font-outfit">
                                {step.title}
                            </h4>
                            <p className="text-supporting-text text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TacticalProcess;
