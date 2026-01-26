import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ElementType, useRef } from "react";
import ServiceSectionTitle from "./service-section-title";

export interface SectorProps {
    icon: ElementType; // Accepts the component itself, e.g., HardHat
    title: string;
    desc: string;
}

interface SectorGridProps {
    sectors: SectorProps[];
    tagline?: string;
    sectionTitle?: string;
}

const SectorGrid = ({
    sectors,
    tagline = "Strategic Partners",
    sectionTitle = "Industry-Specific Expertise",
}: SectorGridProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const sectorCards = document.querySelectorAll(".sector-card");

            gsap.set(sectorCards, {
                y: 100,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(
                sectorCards,
                {
                    y: 0,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power4.out",
                },
                "-=0.4",
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-24 bg-white border-t border-slate-100"
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <ServiceSectionTitle subtitle={sectionTitle} title={tagline} />
                <div className="grid md:grid-cols-3 gap-12">
                    {sectors.map((sector, i) => {
                        // Render the icon component dynamically
                        const Icon = sector.icon;
                        return (
                            <div
                                key={i}
                                className="text-center group sector-card"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-gold/10 transition-colors">
                                    <Icon className="w-8 h-8 text-primary-gold" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 font-outfit">
                                    {sector.title}
                                </h4>
                                <p className="text-supporting-text leading-relaxed">
                                    {sector.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SectorGrid;
