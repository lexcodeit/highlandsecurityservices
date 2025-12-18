"use client";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import "@/lib/styles/mobile-nav.css";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import _SplitText from "gsap/SplitText";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const MobileNav = () => {
    const pathname = usePathname();

    useGSAP(() => {
        const textContainers = document.querySelectorAll(".menu-col");
        const splitTextByContainer: _SplitText[][] = [];

        textContainers.forEach(container => {
            const containerSplits: _SplitText[] = [];

            container.querySelectorAll("a, p").forEach(element => {
                const split = SplitText.create(element, {
                    type: "lines",
                    mask: "lines",
                    linesClass: "line",
                });

                containerSplits.push(split);
                gsap.set(split.lines, { y: "-100%" });
            });

            splitTextByContainer.push(containerSplits);
        });

        const menuToggleBtn = document.querySelector(".hamburger");
        const menuOverlay = document.querySelector(".menu-overlay");
        const menuOverlayContainer = document.querySelector(
            ".menu-overlay-content"
        );
        const copyContainers = document.querySelectorAll(".menu-col");

        let isMenuOpen = false;
        let isAnimating = false;

        const closeMenu = () => {
            if (!isMenuOpen || isAnimating) return;

            isAnimating = true;
            menuToggleBtn?.classList.remove("active");

            const tl = gsap.timeline({
                onComplete: () => {
                    splitTextByContainer.forEach(containerSplits => {
                        const lines = containerSplits.flatMap(s => s.lines);
                        gsap.set(lines, { y: "110%" });
                    });

                    gsap.set(copyContainers, { opacity: 1 });

                    isAnimating = false;
                    isMenuOpen = false;
                },
            });

            tl.to(
                menuOverlay,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 1,
                    ease: "power3.inOut",
                },
                "<"
            ).to(
                menuOverlayContainer,
                {
                    yPercent: -50,
                    duration: 1,
                    ease: "power3.inOut",
                },
                "<"
            );
        };

        const openMenu = () => {
            if (isMenuOpen || isAnimating) return;

            isAnimating = true;

            const tl = gsap.timeline({
                onComplete: () => {
                    isAnimating = false;
                    isMenuOpen = true;
                },
            });

            tl.to(
                menuOverlay,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1,
                    ease: "power2.in",
                },
                "<"
            ).to(
                menuOverlayContainer,
                {
                    yPercent: 0,
                    duration: 1,
                    ease: "power2.inOut",
                },
                "<"
            );

            splitTextByContainer.forEach(containerSplits => {
                const lines = containerSplits.flatMap(s => s.lines);
                tl.to(
                    lines,
                    {
                        y: "0%",
                        duration: 1.5,
                        ease: "power2.inOut",
                        stagger: -0.1,
                    },
                    -0.15
                );
            });

            menuToggleBtn?.classList.add("active");
        };

        menuToggleBtn?.addEventListener("click", () => {
            isMenuOpen ? closeMenu() : openMenu();
        });

        // 👇 Expose closeMenu to link clicks
        document.querySelectorAll(".menu-link").forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    });

    return (
        <nav className="z-50 mobile-nav">
            <div className="flex items-center justify-between mx-auto py-4 px-4 menu-bar z-50">
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
                </div>
            </div>

            <div className="menu-overlay">
                <div className="menu-overlay-content">
                    <div className="menu-content-wrapper">
                        <div className="menu-media-wrapper">
                            <Image
                                src={"/assets/images/eagle-head.png"}
                                width={100}
                                height={100}
                                alt="landing-eagle"
                                className="object-cover w-[300px] absolute -bottom-[150px] -right-4"
                            />
                        </div>
                        <div className="menu-content-main">
                            <div className="menu-col">
                                {NAV_ITEMS.map(item => {
                                    const isActive = pathname.includes(
                                        item.matchPath
                                    );

                                    return (
                                        <Link
                                            key={item.url}
                                            href={item.url}
                                            className={cn(
                                                "flex text-base menu-link",
                                                isActive
                                                    ? "text-primary-gold"
                                                    : "text-supporting-text"
                                            )}
                                        >
                                            {item.text}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="menu-footer">
                            <div className="menu-col">
                                <p>30, SULE ABORE STREET OJODU IKEJA, LAGOS</p>
                                <Link
                                    href={
                                        "@mailto:info@highlandsecurityservices.com"
                                    }
                                >
                                    info@highlandsecurityservices.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
