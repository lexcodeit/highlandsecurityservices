import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface Props {
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
}

const PerValue = ({ description, title, bgColor, textColor }: Props) => {
    const mainCardRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // We start with the card clipped (hidden)
            gsap.set(mainCardRef.current, {
                x: -20, // Optional slight nudge for feeling
            });
            gsap.set(cardRef.current, {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", // Hidden to the right
                opacity: 0,
                rotate: -5,
            });

            const tl = gsap.timeline({
                defaults: {
                    duration: 1.2,
                    ease: "power4.inOut",
                },
                scrollTrigger: {
                    trigger: mainCardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                },
            });

            tl.to(mainCardRef.current, {
                x: 0,
            }).to(
                cardRef.current,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    opacity: 1,
                    rotate: 0,
                },
                "<"
            );
        },
        { scope: cardRef }
    ); // Scope ensures GSAP only looks inside this card

    return (
        <div
            ref={mainCardRef}
            className="px-6 md:px-8 py-10 rounded-md flex flex-col min-h-[300px] relative z-10 "
        >
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 rounded-md"
                style={{
                    backgroundColor: bgColor,
                }}
                ref={cardRef}
            />
            <h2
                style={{
                    color: textColor,
                }}
                className="font-bold font-outfit text-4xl mb-4"
            >
                {title}
            </h2>
            <p
                style={{
                    color: textColor,
                }}
                className="text-lg font-medium"
            >
                {description}
            </p>
        </div>
    );
};

export default PerValue;
