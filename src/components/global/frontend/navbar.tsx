"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!navRef.current) return;

        // Slide nav into view on load
        gsap.to(navRef.current, { top: "0%" });

        const cover = navRef.current.querySelector(".nav-cover");
        const logo = navRef.current.querySelector(".brand-logo");
        const links = navRef.current.querySelectorAll(".nav-link");
        const button = navRef.current.querySelector(".nav-btn");
        const buttonText = navRef.current.querySelector(".nav-btn span");

        // Animate the inner cover padding on scroll
        if (cover) {
            gsap.to(cover, {
                paddingTop: "6px",
                paddingBottom: "6px",
                background: "#fff",
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-cover",
                    start: "bottom top",
                    scrub: 1,
                    end: "+=200",
                },
            });
            gsap.to(logo, {
                width: "50px",
                height: "30px",
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-cover",
                    start: "bottom top",
                    scrub: 1,
                    end: "+=200",
                },
            });

            gsap.to(links, {
                fontSize: "0.9rem",
                padding: "0 12px",
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-cover",
                    start: "bottom top",
                    scrub: 1,
                    end: "+=200",
                },
            });

            gsap.to(button, {
                padding: "12px 16px",
                fontSize: "0.9rem",
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-cover",
                    start: "bottom top",
                    scrub: 1,
                    end: "+=200",
                },
            });
            gsap.to(buttonText, {
                color: "#1e293b",
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-cover",
                    start: "bottom top",
                    scrub: 1,
                    end: "+=200",
                },
            });
        }
    }, []);

    return (
        <nav ref={navRef} className="fixed -top-full left-0 w-full z-50 ">
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
                    <Link href="/about" className="nav-link">
                        About
                    </Link>
                    <Link href="/services" className="nav-link">
                        Services
                    </Link>
                    <Link href="/blog" className="nav-link">
                        Blog
                    </Link>
                    <Link href="/contact" className="nav-link">
                        Contact
                    </Link>
                </div>

                <Link href="/book-security">
                    <Button className="bg-transparent border border-primary-gold text-off-white nav-btn">
                        <span>Book Now</span>
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
