"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { RefObject, useRef } from "react";
import LinkItem from "./link-item";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NAV_ITEMS } from "@/utils/constants";

interface Props {
    pathname: string;
    isDarkHeader: boolean;
    navRef: RefObject<HTMLElement | null>;
}

const MobileNavBar = ({ isDarkHeader, navRef, pathname }: Props) => {
    // useGSAP(() => {
    //     const nav = navRef.current;
    //     if (!nav) return;

    //     const navMain = nav.querySelector(".nav-main");
    //     const cover = nav.querySelector(".nav-cover");
    //     const button = nav.querySelector(".nav-btn");
    //     const buttonText = nav.querySelector(".nav-btn span");

    //     // Slide nav into view on load
    //     gsap.to(nav, { top: "0%" });

    //     // === SCROLL BEHAVIOR BASED ON VIEWPORT ===
    //     ScrollTrigger.create({
    //         start: 100, // when scrolled 100px down
    //         onEnter: () => {
    //             gsap.to(navMain, {
    //                 background: "#fff",
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });

    //             gsap.to(cover, {
    //                 paddingTop: "6px",
    //                 paddingBottom: "6px",
    //                 background: "#fff",
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });

    //             gsap.to(button, {
    //                 padding: "12px 16px",
    //                 fontSize: "0.9rem",
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });

    //             gsap.to(buttonText, {
    //                 color: "#1e293b", // slate-800
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });
    //         },
    //         onLeaveBack: () => {
    //             gsap.to(navMain, {
    //                 background: "transparent",
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });

    //             gsap.to(cover, {
    //                 paddingTop: "16px",
    //                 paddingBottom: "16px",
    //                 background: "transparent",
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });

    //             gsap.to(button, {
    //                 padding: "16px 24px",
    //                 fontSize: "1rem",
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });

    //             gsap.to(buttonText, {
    //                 color: isDarkHeader ? "#f8fafc" : "#1e293b", // adjust based on route
    //                 duration: 0.6,
    //                 ease: "power2.out",
    //             });
    //         },
    //     });
    // }, [isDarkHeader]);

    return (
        <nav className="fixed left-0 w-full z-80">
            <div className="flex items-center justify-between max-w-[1300px] mx-auto py-4 px-4 nav-cover">
                <Link href="/">
                    <Image
                        src="/assets/images/bg-logo.svg"
                        width={100}
                        height={75}
                        className="w-[75px] h-[50px] object-contain brand-logo"
                        alt="Brand logo"
                    />
                </Link>

                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="bg-off-white fixed top-0 left-0 w-full h-full z-50">
                <Image
                    src="/assets/images/bg-logo.svg"
                    width={100}
                    height={75}
                    className="w-[75px] h-[50px] object-contain brand-logo"
                    alt="Brand logo"
                />
                <div className="py-4 px-8 rounded-md flex flex-col gap-y-2 text-supporting-text font-semibold">
                    {NAV_ITEMS.map(item => {
                        const isActive = pathname.includes(item.matchPath);

                        return (
                            <Link
                                key={item.url}
                                href={item.url}
                                className={cn(
                                    "text-xl",
                                    isActive
                                        ? "text-header-text"
                                        : "text-supporting-text"
                                )}
                            >
                                {item.text}
                            </Link>
                        );
                    })}

                    <Link href="/book-security" className="w-full">
                        <Button
                            className={cn("border border-primary-gold nav-btn")}
                        >
                            <span>Book Now</span>
                        </Button>
                    </Link>

                    <Image
                        src={"/assets/images/eagle-head.png"}
                        width={100}
                        height={100}
                        alt="landing-eagle"
                        className="object-cover w-[300px] opacity-20 absolute -bottom-[150px] -right-4"
                    />

                    <div>
                        <p>30, SULE ABORE STREET OJODU IKEJA, LAGOS</p>

                        <div>
                            <p>+234 813 754 8459</p>
                            <label>info@highlandsecurityservices.com</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavBar;
