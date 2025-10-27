"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LinkItem from "./link-item";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useGSAP(() => {
        const nav = navRef.current;
        if (!nav) return;

        const navMain = nav.querySelector(".nav-main");
        const cover = nav.querySelector(".nav-cover");
        const logo = nav.querySelector(".brand-logo");
        const button = nav.querySelector(".nav-btn");
        const buttonText = nav.querySelector(".nav-btn span");

        // Slide nav into view on load
        gsap.to(nav, { top: "0%" });

        // === SCROLL BEHAVIOR BASED ON VIEWPORT ===
        ScrollTrigger.create({
            start: 100, // when scrolled 100px down
            onEnter: () => {
                gsap.to(navMain, {
                    background: "#fff",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(cover, {
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    background: "#fff",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(logo, {
                    width: "50px",
                    height: "30px",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(button, {
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(buttonText, {
                    color: "#1e293b", // slate-800
                    duration: 0.6,
                    ease: "power2.out",
                });
            },
            onLeaveBack: () => {
                gsap.to(navMain, {
                    background: "transparent",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(cover, {
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    background: "transparent",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(logo, {
                    width: "100px",
                    height: "75px",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(button, {
                    padding: "16px 24px",
                    fontSize: "1rem",
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(buttonText, {
                    color: isHome ? "#f8fafc" : "#1e293b", // adjust based on route
                    duration: 0.6,
                    ease: "power2.out",
                });
            },
        });
    }, [isHome]);

    return (
        <nav
            ref={navRef}
            className="fixed -top-full left-0 w-full z-50 nav-main"
        >
            <div className="flex items-center justify-between max-w-[1300px] mx-auto py-4 px-4 nav-cover">
                <Link href="/">
                    <Image
                        src="/assets/images/bg-logo.svg"
                        width={100}
                        height={75}
                        className="w-[100px] h-[75px] object-contain brand-logo"
                        alt="Brand logo"
                    />
                </Link>

                <div className="bg-light-bg py-4 px-8 rounded-md flex items-center gap-x-10 text-supporting-text font-semibold">
                    <LinkItem
                        isActive={pathname.includes("/about")}
                        text="About"
                        url="/about"
                    />
                    <LinkItem
                        isActive={pathname.includes("/services")}
                        text="Services"
                        url="/services"
                    />
                    <LinkItem
                        isActive={pathname.includes("/blog")}
                        text="Blog"
                        url="/blog"
                    />
                    <LinkItem
                        isActive={pathname.includes("/contact")}
                        text="Contact"
                        url="/contact"
                    />
                </div>

                <Link href="/book-security">
                    <Button
                        className={cn(
                            "bg-transparent border border-primary-gold nav-btn",
                            isHome ? "text-off-white" : "text-header-text"
                        )}
                    >
                        <span>Book Now</span>
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
