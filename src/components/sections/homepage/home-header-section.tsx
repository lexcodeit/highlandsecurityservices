import React, { useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeHeaderSection = () => {
    const borderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const eagleImage = document.querySelector(".eagle-image");

        if (eagleImage) {
            gsap.to(eagleImage, {
                x: "40%",
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-cover",
                    start: "10% top",
                    scrub: 1,
                    // markers: true,
                    end: "+=200",
                },
            });
        }
    });

    useEffect(() => {
        if (!borderRef.current) return;

        gsap.to(borderRef.current, {
            backgroundPosition: "200% 0%",
            duration: 4,
            repeat: -1,
            ease: "linear",
            yoyo: true,
        });
    }, []);

    return (
        <div className="min-h-[100vh] relative hero-cover py-[75px] overflow-hidden">
            <div className="max-w-[1400px] mx-auto h-full flex justify-center">
                <div className="pt-[100px] flex flex-col items-center gap-y-5 px-[100px]">
                    <div className="relative inline-block">
                        <h3 className="mx-auto px-8 py-3 rounded-[8px] bg-white hero-button font-semibold relative cursor-pointer">
                            #1 Security Provider App
                        </h3>
                        <div
                            ref={borderRef}
                            className="absolute inset-0 rounded-md p-[2px] pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(255,215,0,0.5), transparent, rgba(255,215,0,0.5), transparent, rgba(255,215,0,0.5))",
                                backgroundSize: "300% 100%",
                                filter: "blur(2px)",
                            }}
                        >
                            <div className="w-full h-full bg-transparent rounded-md" />
                        </div>
                    </div>
                    <h1 className="font-outfit font-bold text-[60px] text-center mb-1 hero-title">
                        Book{" "}
                        <span className="gradient-header">Professional</span>{" "}
                        Security Services in Minutes
                    </h1>
                    <p className="text-center font-semibold text-2xl text-supporting-text w-[70%] mx-auto">
                        Highland Security provides fully trained and vetted
                        guards for individuals, homes, businesses, and events.
                        With our seamless booking system, professional
                        protection is now faster and more accessible than ever.
                    </p>
                    <div className="mx-auto w-full flex justify-center mt-4">
                        <Button className="font-semibold text-base py-4 px-8 z-10">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            <Image
                src={"/assets/images/landing.svg"}
                width={100}
                height={100}
                alt="landing-eagle"
                className="absolute h-full w-1/2 top-0 right-0 object-cover eagle-image"
            />
        </div>
    );
};

export default HomeHeaderSection;
