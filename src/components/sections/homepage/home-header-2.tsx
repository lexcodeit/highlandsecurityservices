"use client";

import React, { useRef } from "react";
import "@/lib/styles/header.css";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/utils/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const storyDuration = 10000;
const contentUpdateDelay = 0.5;

const HomeHeader2 = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeStoryRef = useRef(0);
    const setActiveStory = (value: number) => {
        activeStoryRef.current = value;
    };
    const directionRef = useRef<"next" | "prev">("next");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // -----------------------
    // Story Transition Logic
    // -----------------------
    const animateNewImage = (imgContainer: HTMLElement) => {
        const dir = directionRef.current;
        gsap.set(imgContainer, {
            clipPath:
                dir === "next"
                    ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
                    : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        });
        gsap.to(imgContainer, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power4.inOut",
        });
    };

    const animateImageScale = (
        currentImg: HTMLElement,
        upcomingImg: HTMLElement
    ) => {
        const dir = directionRef.current;
        gsap.fromTo(
            currentImg,
            { scale: 1, rotate: 0 },
            {
                scale: 2,
                rotate: dir === "next" ? -25 : 25,
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => currentImg.parentElement?.remove(),
            }
        );

        gsap.fromTo(
            upcomingImg,
            { scale: 2, rotate: dir === "next" ? 25 : -25 },
            { scale: 1, rotate: 0, duration: 1, ease: "power4.inOut" }
        );
    };

    const animateIndexHighlight = (index: number) => {
        const highlight = document.querySelectorAll(".header-index-highlight")[
            index
        ];
        if (!highlight) return;

        gsap.set(highlight, { width: "0%" });
        gsap.to(highlight, {
            width: "100%",
            duration: storyDuration / 1000,
            ease: "none",
        });
    };

    const resetIndexHighlight = (index: number) => {
        const highlight = document.querySelectorAll(".header-index-highlight")[
            index
        ];
        if (!highlight) return;

        gsap.killTweensOf(highlight);
        gsap.to(highlight, { width: "0%", duration: 0.3 });
    };

    // -----------------------
    // Main story changer
    // -----------------------
    const changeStory = () => {
        const dir = directionRef.current;
        const prev = activeStoryRef.current;
        const next =
            dir === "next"
                ? (activeStoryRef.current + 1) % stories.length
                : (activeStoryRef.current - 1 + stories.length) %
                  stories.length;

        const story = stories[next];
        setActiveStory(next);

        const currentImgContainer = document.querySelector(".header-img");
        const currentImg = currentImgContainer?.querySelector("img");

        if (!currentImg) return;

        gsap.to(".header-title-row h1", {
            y: dir === "next" ? -48 : 48,
            duration: 0.5,
            delay: contentUpdateDelay,
        });

        setTimeout(() => {
            // Create and append new image
            const newImgContainer = document.createElement("div");
            newImgContainer.classList.add("header-img");
            const newImg = document.createElement("img");
            newImg.src = story.storyImg;
            newImg.alt = story.title[0];
            newImgContainer.appendChild(newImg);

            const storyImgDiv = document.querySelector(".header-story-img");
            storyImgDiv?.appendChild(newImgContainer);

            // Run animations
            animateNewImage(newImgContainer);
            animateImageScale(currentImg, newImg);

            // Animate the texts back in
            // Update text content after image transition delay
            setTimeout(() => {
                // Update DOM text to the new story
                const titleRows = document.querySelectorAll(
                    ".header-title-row h1"
                );
                const link = document.querySelector(".header-link a");
                const storyDesc = document.querySelector(
                    ".header-story-description p"
                );

                if (titleRows.length >= 3) {
                    titleRows[0].textContent = story.title[0];
                    titleRows[1].textContent = story.title[1];
                    titleRows[2].textContent = story.title[2];
                }
                if (link) link.setAttribute("href", story.linkSrc);

                if (storyDesc) storyDesc.textContent = story.shortDesc;

                gsap.set(".header-title-row h1", {
                    y: dir === "next" ? 48 : -48,
                });
                gsap.set(link, {
                    y: dir === "next" ? 48 : -48,
                });
                gsap.set(storyDesc, {
                    y: dir === "next" ? 100 : -100,
                });

                gsap.to(".header-title-row h1", {
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                });

                gsap.to(link, {
                    y: 0,
                    duration: 0.6,
                    delay: 0.3,
                    ease: "power2.out",
                });
                gsap.to(storyDesc, {
                    y: 0,
                    duration: 0.6,
                    delay: 0.3,
                    ease: "power2.out",
                });
            }, 600); // wait for image transition to start

            // Reset and animate index highlight
            resetIndexHighlight(prev);
            animateIndexHighlight(next);

            timeoutRef.current = setTimeout(changeStory, storyDuration);
        }, 200);
    };

    // -----------------------
    // Mouse Movement Logic
    // -----------------------
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.to(cursor, {
            x: clientX - cursor.offsetWidth / 2,
            y: clientY - cursor.offsetHeight / 2,
            ease: "power2.out",
            duration: 0.3,
        });

        const cursorText = cursor.querySelector("p");
        const half = window.innerWidth / 2;
        if (clientX < half) {
            cursorText!.textContent = "HSSL";
        } else {
            cursorText!.textContent = "Eagle Eye";
        }
    };

    // -----------------------
    // Initialize GSAP on mount
    // -----------------------
    useGSAP(() => {
        animateIndexHighlight(activeStoryRef.current);
        timeoutRef.current = setTimeout(changeStory, storyDuration);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={"header-container hero-cover"}
            onMouseMove={handleMouseMove}
        >
            <div ref={cursorRef} className={"header-cursor"}>
                <p></p>
            </div>

            <div className={"header-story-img"}>
                <div className={"header-img"}>
                    <Image
                        src={"/assets/images/services/corporate-security.jpg"}
                        alt="Corporate Security"
                        fill
                    />
                </div>
            </div>

            <div className={"header-story-content"}>
                <div className={"row"}>
                    <div className={"header-indices"}>
                        {stories.map((_, i) => (
                            <div key={i} className={"header-index"}>
                                <div className={"header-index-highlight"}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={"header-row"}>
                    <div className={"header-title"}>
                        <div className={"header-title-row"}>
                            <h1>{stories[0].title[0]}</h1>
                        </div>
                        <div className={"header-title-row"}>
                            <h1>{stories[0].title[1]}</h1>
                        </div>
                        <div className={"header-title-row"}>
                            <h1>{stories[0].title[2]}</h1>
                        </div>
                    </div>

                    <div className="header-story-description">
                        <p>{stories[0].shortDesc}</p>
                    </div>
                    <div className={"header-link"}>
                        <Link href="https://behance.net" target="_blank">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader2;
