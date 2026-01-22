import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { ElementType, useEffect, useRef, useState } from "react";

interface Props {
    tagline: string;
    title: {
        main: string;
        dimmed: string;
    };
    description: string;
    imgUrl: string;
    bgColor: string;
    icons: ElementType[];
}

const ServiceHero = ({
    bgColor,
    description,
    imgUrl,
    tagline,
    title,
    icons,
}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const tagLineRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [hasMounted, setHasMounted] = useState(false); // Track mounting

    // Set mounted to true once we are on the client
    useEffect(() => {
        setHasMounted(true);
    }, []);

    useGSAP(() => {
        if (
            !hasMounted ||
            !titleRef.current ||
            !descriptionRef.current ||
            !tagLineRef.current ||
            !imageRef.current
        )
            return;
        const ctx = gsap.context(() => {
            const splitDescription = new SplitText(descriptionRef.current, {
                type: "lines",
                mask: "lines",
                linesClass: "line-wrapper",
            });

            gsap.set(imageRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                scale: 1.2,
            });
            gsap.set(titleRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                x: -85,
            });
            gsap.set(tagLineRef.current, { opacity: 0, y: -20 });
            gsap.set(".trust-circle", { scale: 0, opacity: 0 }); // Target the circles

            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.inOut",
                    delay: 0.5,
                },
            });

            tl.to(imageRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                scale: 1,
                duration: 1.6,
            })
                .to(
                    tagLineRef.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                    },
                    "-=1.2",
                )
                .to(
                    titleRef.current,
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        x: 0,
                        duration: 1,
                    },
                    "-=1",
                )
                .to(
                    splitDescription.lines,
                    {
                        y: 0,
                        stagger: 0.1,
                        duration: 0.8,
                    },
                    "-=0.8",
                )
                .to(
                    ".trust-circle",
                    {
                        scale: 1,
                        opacity: 1,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "back.out(1.7)", // Professional pop-out effect
                    },
                    "-=0.4",
                );
        }, containerRef);

        return () => ctx.revert();
    }, [hasMounted]);

    return (
        <section
            ref={containerRef}
            className="relative pt-32 pb-20 overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <h2
                        ref={tagLineRef}
                        className="text-primary-gold font-bold uppercase tracking-[0.2em] text-sm mb-4"
                    >
                        {tagline}
                    </h2>
                    <h1
                        ref={titleRef}
                        className="text-6xl lg:text-7xl font-bold font-outfit leading-tight mb-6 text-[#0A0A0A]"
                    >
                        {title.main} <br />{" "}
                        <span className="opacity-70">{title.dimmed}.</span>
                    </h1>
                    <p
                        ref={descriptionRef}
                        className="text-xl text-slate-700 max-w-md mb-8 leading-relaxed"
                    >
                        {description}
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {/* Place small circular icons or profile placeholders here */}
                            {icons.map(icon => {
                                const Icon = icon;
                                return (
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-300 bg-white trust-circle flex items-center justify-center text-primary-gold">
                                        <Icon />
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-sm font-bold text-slate-600 uppercase tracking-tighter">
                            Trusted by Nigeria's <br /> Leading Firms
                        </p>
                    </div>
                </div>
                <div className="relative h-[550px] w-full shadow-2xl rounded-3xl overflow-hidden">
                    <Image
                        ref={imageRef}
                        src={`/assets/images/${imgUrl}`}
                        fill
                        className="object-cover"
                        alt="Corporate Security Officer"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
