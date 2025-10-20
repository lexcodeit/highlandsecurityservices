"use client";
import React, { useRef } from "react";
import SectionTitle from "@/components/global/frontend/section-title";
import "@/lib/styles/services.css";
import { ServicesListArr } from "@/utils/constants";
import { SERVICES_MAP } from "@/utils/maps";
import ServiceSectionCard from "./service-section-card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ServicesSection2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLDivElement>(".service-card");
            ScrollTrigger.create({
                trigger: cards[0],
                start: "top 25%",
                endTrigger: cards[cards.length - 1],
                end: "top 30%",
                pin: ".services-intro",
                pinSpacing: false,
            });

            cards.forEach((card, index) => {
                const isLastCard = index === cards.length - 1;
                const cardInner = card.querySelector(".service-card-inner");

                if (!isLastCard) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top 25%",
                        endTrigger: ".services-outro",
                        end: "top 65%",
                        pin: true,
                        pinSpacing: false,
                    });

                    gsap.to(cardInner, {
                        y: `-${(cards.length - index) * 14}vh`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 25%",
                            endTrigger: ".services-outro",
                            end: "top 65%",
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
                <section className="services-intro">
                    <h1>
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
                <section className="services-outro">
                    <h1>
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
