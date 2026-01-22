import { useRef } from "react";
import { ValueListArr } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "@/components/global/frontend/section-title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ValuesSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !trackRef.current) return;

        const mm = gsap.matchMedia();

        // Desktop only
        mm.add("(min-width: 1024px)", () => {
            const track = trackRef.current;
            const container = containerRef.current;

            if (!track || !container) return;

            const totalScroll = track.scrollWidth - container.offsetWidth;

            gsap.to(track, {
                x: -totalScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "18% top",
                    end: () => `+=${track.scrollWidth}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex flex-col overflow-hidden"
        >
            <SectionTitle
                title="Why Choose Eagle Eye Security"
                subtitle="We go beyond standard security. With years of proven expertise, professional personnel, and a commitment to vigilance, we deliver protection you can trust — anytime, anywhere."
            />

            {/* Horizontal track */}
            {/* <div ref={trackRef} className="relative flex gap-x-12 px-20 w-max"> */}
            <div
                ref={trackRef}
                className="
    relative flex gap-6 px-4
    flex-col
    lg:flex-row
    lg:px-20
    lg:w-max
  "
            >
                {ValueListArr.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className={cn(
                                "flex-shrink-0 w-[350px] lg:w-[500px] flex flex-col gap-y-6 border border-border-color rounded-lg p-6 bg-white shadow-md",
                            )}
                        >
                            <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden rounded-md">
                                <Image
                                    alt={value.count}
                                    src={`/assets/images/values/${value.image}`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105 object-top"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-4">
                                    <h4 className="font-outfit text-lg font-semibold text-primary-gold">
                                        ({value.count})
                                    </h4>
                                    <h3 className="font-outfit text-2xl font-semibold text-header-text">
                                        {value.title}
                                    </h3>
                                </div>
                                <p className="text-supporting-text leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ValuesSection;
