import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const HomeAboutSection = () => {
    useGSAP(() => {
        const aboutText = gsap.utils.toArray(`.about-text`) as HTMLElement[];

        const eagleEyeText = document.querySelector(".eagle-eye");

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

        gsap.fromTo(
            eagleEyeText,
            {
                y: 100,
            },
            {
                y: 0,
                duration: 0.8,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: eagleEyeText,
                    start: "top 80%",
                    toggleActions: "restart none none reset", // replay every time
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(
            ".eagle",
            {
                x: 100,
            },
            {
                x: 0,
                duration: 0.8,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".eagle",
                    start: "top 70%",
                    toggleActions: "restart none none reset", // replay every time
                    scrub: 1,
                },
            }
        );
    });

    return (
        <div className="mx-auto max-w-[1200px] py-24 px-6 lg:px-0 min-h-[100vh] relative about-section">
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h3 className="relative text-xl lg:text-3xl text-header-text font-outfit font-semibold mb-10 about-text top-[100px]">
                    At Highland Security Services, we deliver trusted protection
                    for individuals, businesses, and events across Nigeria.
                </h3>
            </div>
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h3 className="relative text-2xl lg:text-3xl text-header-text font-outfit font-semibold about-text top-[100px]">
                    Our team is built on discipline, integrity, and swift
                    response to your needs. From personal bodyguards to
                    industrial security, we’ve got you covered.
                </h3>
            </div>

            <div
                className=" lg:absolute bottom-0 left-0 w-full flex flex-col lg:flex-row items-center gap-x-4"
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            >
                <h1 className=" font-brush-script eagle-eye">Eagle Eye</h1>
                <Image
                    src={"/assets/images/eagle-head.png"}
                    width={100}
                    height={100}
                    alt="landing-eagle"
                    className="object-cover w-[200px] eagle"
                />
            </div>
        </div>
    );
};

export default HomeAboutSection;
