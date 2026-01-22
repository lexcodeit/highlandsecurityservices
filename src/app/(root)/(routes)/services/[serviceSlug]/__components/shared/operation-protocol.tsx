import { useGSAP } from "@gsap/react";
import { ShieldCheck } from "lucide-react";
import { ElementType, useRef } from "react";

export interface ProtocolItem {
    icon: ElementType;
    title: string;
    desc: string;
}

interface Props {
    tagline?: string;
    mainTitle: string | React.ReactNode;
    description: string;
    protocols: ProtocolItem[];
}

const OperationalProtocol = ({
    description,
    mainTitle,
    protocols,
    tagline,
}: Props) => {
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
                            {mainTitle} <br /> {tagline}
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {description}
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
                        {protocols.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={i}
                                    className="protocol-card p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="text-primary-gold mb-4">
                                        <Icon />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 font-outfit">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationalProtocol;
