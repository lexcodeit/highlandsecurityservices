"use client";

import {
    FacebookPage,
    InstagramPage,
    LinkedInPage,
    TiktokPage,
} from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsTiktok } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FooterBanner from "./footer-banner";

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!footerRef.current) return;

        const mm = gsap.matchMedia();

        mm.add(
            {
                desktop: "(min-width: 1024px)",
                mobile: "(max-width: 1023px)",
            },
            context => {
                const { mobile } = context.conditions!;
                const trigger = footerRef.current!;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger,
                        start: mobile ? "top 85%" : "top 70%",
                        once: mobile, // 🔑 critical for mobile
                    },
                });

                // // Wrapper
                // tl.fromTo(
                //     trigger,
                //     { opacity: 0, y: mobile ? 20 : 50 },
                //     {
                //         opacity: 1,
                //         y: 0,
                //         duration: 0.6,
                //         ease: "power3.out",
                //     }
                // );

                // // Logo block
                // tl.fromTo(
                //     ".footer-logo-block",
                //     { opacity: 0, x: mobile ? 0 : -50, y: mobile ? 20 : 0 },
                //     {
                //         opacity: 1,
                //         x: 0,
                //         y: 0,
                //         duration: 0.7,
                //         ease: "power3.out",
                //     },
                //     "-=0.3"
                // );

                // // Columns
                // tl.fromTo(
                //     ".footer-col",
                //     { opacity: 0, y: 20 },
                //     {
                //         opacity: 1,
                //         y: 0,
                //         duration: 0.5,
                //         stagger: 0.15,
                //         ease: "power2.out",
                //     },
                //     "-=0.3"
                // );

                // // Bottom bar
                // tl.fromTo(
                //     ".footer-bottom",
                //     { opacity: 0, y: 15 },
                //     {
                //         opacity: 1,
                //         y: 0,
                //         duration: 0.4,
                //         ease: "power2.out",
                //     },
                //     "-=0.2"
                // );
            }
        );

        return () => mm.revert();
    }, []);
    return (
        <div
            ref={footerRef}
            className="p-3 lg:p-10 border-t border-t-border-color relative mt-[200px] pt-[150px]"
        >
            <FooterBanner />
            <div className="flex flex-col lg:flex-row justify-between max-w-[1200px] mx-auto gap-10 py-4 px-2 my-10">
                {/* Logo + About */}
                <div className="flex-2 footer-logo-block">
                    <div className="flex mb-2 items-center">
                        <Image
                            src={"/assets/images/bg-logo.svg"}
                            width={100}
                            height={100}
                            className="w-16 h-16 lg:w-[100px] lg:h-[100px] object-contain"
                            alt="contain"
                        />

                        <h1 className="font-bold text-primary-gold text-3xl lg:text-[48px]">
                            HSSL
                        </h1>
                    </div>
                    <div>
                        <p className="text-sm text-supporting-text">
                            Highland Security Services Limited (Eagle Eye) is a
                            Lagos-based private security company providing
                            trusted protection for individuals, businesses, and
                            events. We combine trained personnel, modern
                            surveillance systems, and industry expertise to
                            safeguard lives, assets, and reputation.
                        </p>
                        <Link
                            href={"mailto:info@highlandsecurityservices.com"}
                            className="text-primary-gold font-semibold block my-4 underline text-base lg:text-xl"
                        >
                            info@highlandsecurityservices.com
                        </Link>

                        <div>
                            <div className="flex items-center gap-x-6 text-supporting-text font-semibold">
                                <Link target="_blank" href={LinkedInPage}>
                                    <FaLinkedin className="size-8 text-header-text" />
                                </Link>
                                <Link target="_blank" href={InstagramPage}>
                                    <FiInstagram className="size-8 text-header-text" />
                                </Link>
                                <Link target="_blank" href={FacebookPage}>
                                    <FiFacebook className="size-8 text-header-text" />
                                </Link>

                                <Link target="_blank" href={TiktokPage}>
                                    <BsTiktok className="size-8 text-header-text" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columns */}
                <div className="footer-col flex flex-col gap-y-3 px-4 flex-1">
                    <h3 className="text-supporting-text font-medium text-sm">
                        Company
                    </h3>
                    <Link
                        href="/about"
                        className="text-header-text font-medium"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/services"
                        className="text-header-text font-medium"
                    >
                        Services
                    </Link>
                    <Link
                        className="text-header-text font-medium"
                        href="/careers"
                    >
                        Careers
                    </Link>
                </div>
                <div className="footer-col flex flex-col gap-y-3 px-4 flex-1">
                    <h3 className="text-supporting-text font-medium text-sm">
                        Legal
                    </h3>
                    <Link
                        href="/privacy-policy"
                        className="text-header-text font-medium"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms-and-conditions"
                        className="text-header-text font-medium"
                    >
                        Terms and Conditions
                    </Link>
                </div>
                <div className="footer-col flex flex-col gap-y-3 px-4 flex-1">
                    <h3 className="text-supporting-text font-medium text-sm">
                        Platform
                    </h3>
                    <Link href="/faqs" className="text-header-text font-medium">
                        FAQs
                    </Link>
                    <Link href="/blog" className="text-header-text font-medium">
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="text-header-text font-medium"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom border-t border-t-border-color p-6 flex items-center justify-center">
                <p className="text-supporting-text text-sm font-outfit text-center">
                    © {new Date().getFullYear()} Highland Security Services.
                    All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
