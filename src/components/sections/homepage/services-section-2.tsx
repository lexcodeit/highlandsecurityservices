"use client";
import { useRef } from "react";
import SectionTitle from "@/components/global/frontend/section-title";
import "@/lib/styles/services.css";
import { ServicesListArr } from "@/utils/constants";
import { SERVICES_MAP } from "@/utils/maps";
import ServiceSectionCard from "./service-section-card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const ServicesSection2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });
    useGSAP(
        () => {
            const splitIntroText = document.querySelector(".services-intro h1");

            const splitOutroText = document.querySelector(".services-outro h1");

            // if (!splitIntroText || !splitOutroText) return;

            const servicesIntroSplit = new SplitText(splitIntroText, {
                type: "lines",
                mask: "lines",
                linesClass: "lines-split-setup",
            });

            const servicesOutroSplit = new SplitText(splitOutroText, {
                type: "lines",
                mask: "lines",
                linesClass: "lines-split-setup",
            });

            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services-intro",
                    start: "top 80%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse",
                },
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services-outro",
                    start: "top 80%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse",
                },
            });

            tl1.to(servicesIntroSplit.lines, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.25,
                ease: "power4.inOut",
                duration: 1,
            });

            tl2.to(servicesOutroSplit.lines, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.25,
                ease: "power4.inOut",
                duration: 1,
            });

            const cards = gsap.utils.toArray<HTMLDivElement>(".service-card");
            ScrollTrigger.create({
                trigger: cards[0],
                start: "top 15%",
                endTrigger: cards[cards.length - 1],
                end: "top 20%",
                pin: ".services-intro",
                pinSpacing: false,
            });

            cards.forEach((card, index) => {
                const isLastCard = index === cards.length - 1;
                const cardInner = card.querySelector(".service-card-inner");
                const nextCard = cards[index + 1];

                if (!isLastCard) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top 15%",
                        endTrigger: nextCard,
                        end: "top 75%",
                        pin: true,
                        pinSpacing: false,
                    });

                    gsap.to(cardInner, {
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 15%",
                            endTrigger: ".services-outro",
                            end: "top 75%",
                            scrub: true,
                        },
                    });
                }
            });

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        },
        {
            scope: containerRef,
        }
    );

    return (
        <div className="min-h-screen flex flex-col">
            <SectionTitle
                title="Explore our Services"
                subtitle="From personal protection to advanced surveillance, our services are tailored to your needs. Explore each option and secure trusted security solutions in just a few clicks."
            />

            <div className="services-container" ref={containerRef}>
                <section className="services-intro service-big-text">
                    <h1 className="text-center px-6 w-full lg:max-w-3/4 ">
                        Every client deserves the assurance of safety without
                        compromise. At Highland Security Services Limited (Eagle
                        Eye), we deliver world-class security solutions built on
                        trust, discipline, and precision.
                    </h1>
                </section>
                <section className="services-cards">
                    {ServicesListArr.map((service, index) => {
                        const serviceProp = SERVICES_MAP[service];
                        return (
                            <ServiceSectionCard
                                index={index}
                                service={serviceProp}
                                key={index}
                            />
                        );
                    })}
                </section>
                <section className="services-outro service-big-text">
                    <h1 className="text-center px-6 lg:px-[10%]">
                        Your security story begins with a single step. Partner
                        with Highland Security Services Limited today and
                        experience protection that’s personal, professional, and
                        always one step ahead.
                    </h1>
                </section>
            </div>
        </div>
    );
};

export default ServicesSection2;
