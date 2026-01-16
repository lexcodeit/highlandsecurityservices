"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SplitText } from "gsap/all";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

interface Props {
    title: string;
    subtitle: string;
    buttonLink?: string;
}

const SectionTitle = ({ subtitle, title, buttonLink }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const [hasMounted, setHasMounted] = useState(false); // Track mounting

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    // Set mounted to true once we are on the client
    useEffect(() => {
        setHasMounted(true);
    }, []);

    useGSAP(() => {
        if (!hasMounted || !titleRef.current) return;
        const ctx = gsap.context(() => {
            // 1. Split the text
            const subtitleSplit = new SplitText(".section-subtitle", {
                type: "lines",
                mask: "lines",
                linesClass: "overflow-hidden", // Wrapper to hide the text as it slides up
            });

            // 2. Set initial states via GSAP (more reliable than CSS for SplitText)
            gsap.set(subtitleSplit.lines, { yPercent: 100 });
            gsap.set(titleRef.current, {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Adjusted for better visibility
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(titleRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
                ease: "power3.out",
            }).to(
                subtitleSplit.lines,
                {
                    yPercent: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power4.out",
                },
                "-=0.6"
            );
        }, containerRef);

        return () => ctx.revert();
    }, [hasMounted]);

    return (
        <div ref={containerRef} className="py-12">
            <div className="mx-auto max-w-[1200px] flex items-center">
                <div className="p-4 lg:p-0">
                    <h2
                        ref={titleRef}
                        className="section-title text-header-text font-outfit text-3xl lg:text-3xl font-bold w-full lg:max-w-[90%] mb-4 lg:mb-0"
                    >
                        {title}
                    </h2>
                    <p
                        ref={subtitleRef}
                        className={cn(
                            "section-subtitle text-supporting-text w-full lg:max-w-[80%] text-base lg:text-xl lg:block",
                            hasMounted && isMobile
                                ? buttonLink
                                    ? "hidden "
                                    : "block"
                                : "block"
                        )}
                    >
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
