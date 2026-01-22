import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ShieldCheck, Search, Zap, Clock } from "lucide-react";

const OperationalProtocol = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // gsap.from(".protocol-card", {
            //     scrollTrigger: {
            //         trigger: containerRef.current,
            //         start: "top 75%",
            //         toggleActions: "play none none reverse",
            //     },
            //     y: 50,
            //     opacity: 0,
            //     stagger: 0.2,
            //     duration: 1,
            //     ease: "power3.out",
            // });
        },
        { scope: containerRef },
    );

    const protocols = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Unannounced Inspections",
            desc: "Supervisory staff perform surprise drop-ins at any time to observe and evaluate performance, ensuring total alertness.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "On-Site Orientation",
            desc: "Guards are thoroughly oriented on-site to understand specific building layouts, logistics, and venue instructions.",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Continuous Support",
            desc: "Ongoing training is provided to handle new situations and correct any service deficiencies noted during duty.",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Availability",
            desc: "Field supervisors are available 24/7, and the office remains open seven days a week for immediate response.",
        },
    ];

    return (
        <section
            ref={containerRef}
            className="py-24 bg-slate-900 text-white overflow-hidden"
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-primary-gold font-bold uppercase tracking-widest text-sm mb-4">
                            Operational Excellence
                        </h2>
                        <h3 className="text-4xl lg:text-5xl font-bold font-outfit mb-6 leading-tight">
                            The Accountability <br /> Infrastructure
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Effective security depends on adequate supervision.
                            We guarantee that your facility is never left
                            vulnerable through a multi-layered oversight system.
                        </p>

                        {/* Seal of Quality placeholder */}
                        <div className="inline-flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/5">
                            <div className="w-12 h-12 rounded-full bg-primary-gold flex items-center justify-center text-slate-900">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="font-bold uppercase tracking-tighter text-sm">
                                    Certified & Bonded
                                </p>
                                <p className="text-xs text-slate-400">
                                    Exceeding Ministry Standards
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {protocols.map((item, i) => (
                            <div
                                key={i}
                                className="protocol-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-primary-gold mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 font-outfit">
                                    {item.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationalProtocol;
