"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    title: string;
    subtitle: string;
    buttonLink?: string;
}

const SectionTitle = ({ subtitle, title, buttonLink }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const subtitleSplit = SplitText.create(".section-subtitle", {
                type: "words",
            });

            gsap.set(subtitleSplit.lines, {
                y: 50,
                opacity: 0,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "restart none none reset", // replay every time
                },
            });

            tl.from(".section-title", {
                clipPath: "inset(0 100% 0 0)", // hidden from right
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }).from(
                ".section-subtitle",
                {
                    // clipPath: "inset(0 100% 0 0)",
                    opacity: 0,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.6" // start a bit before title finishes
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="py-12">
            <div className="mx-auto max-w-[1200px] flex items-center">
                <div>
                    <h2 className="section-title text-header-text font-outfit text-[48px] font-bold max-w-[80%]">
                        {title}
                    </h2>
                    <p className="section-subtitle text-supporting-text max-w-[60%] text-xl">
                        {subtitle}
                    </p>
                </div>
                <div>
                    {buttonLink ? (
                        <Link href={buttonLink}>
                            <Button variant="outline">View More</Button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
