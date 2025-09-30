import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const HomeAboutSection = () => {
    useGSAP(() => {
        const aboutText = gsap.utils.toArray(`.about-text`) as HTMLElement[];

        gsap.fromTo(
            aboutText,
            { opacity: 0 }, // start state
            {
                top: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-section", // section wrapper
                    start: "top 75%", // when section hits 75% of viewport
                    toggleActions: "play none none reverse",
                    // markers: true, // uncomment for debugging
                    // scrub: 1,
                },
            }
        );
    });

    return (
        <div className="mx-auto max-w-[1200px] py-24 min-h-[100vh] relative about-section">
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h3 className="relative text-3xl text-header-text font-outfit font-semibold mb-10 about-text top-[100px]">
                    At Highland Security Services, we deliver trusted protection
                    for individuals, businesses, and events across Nigeria.
                </h3>
            </div>
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h3 className="relative text-3xl text-header-text font-outfit font-semibold about-text top-[100px]">
                    Our team is built on discipline, integrity, and swift
                    response to your needs. From personal bodyguards to
                    industrial security, we’ve got you covered.
                </h3>
            </div>

            <div className="absolute bottom-0 left-0 eagle-eye w-full flex items-center">
                <h1 className=" font-brush-script eagle-eye">Eagle Eye</h1>
                {/* <div className="flex-1 relative"> */}
                <Image
                    src={"/assets/images/eagle-head.png"}
                    width={100}
                    height={100}
                    alt="landing-eagle"
                    className="object-cover w-[200px]"
                />
                {/* </div> */}
            </div>
        </div>
    );
};

export default HomeAboutSection;
