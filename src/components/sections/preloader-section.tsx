"use client";
import React from "react";
import styles from "@/lib/styles/preloader.module.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PreloaderSection = () => {
    useGSAP(() => {
        // grab elements
        const counts = gsap.utils.toArray(`.${styles.count}`) as HTMLElement[];
        const counterContainer = document.querySelector(`.${styles.counter}`);

        // start timeline
        const tl = gsap.timeline({ delay: 0.3 });

        // initial state
        counts.forEach((count, index) => {
            const digits = count.querySelectorAll(`.${styles["digit"]} h1`);

            // animate digits in
            tl.to(
                digits,
                {
                    y: "0%",
                    duration: 1,
                    stagger: 0.075,
                },
                index // start times
            );

            // animate digits out & container slide
            tl.to(
                digits,
                {
                    y: "-100%",
                    duration: 0.5,
                },
                index + 1 // next part
            );
        });

        // slide container up after counts finish
        tl.to(
            counterContainer,
            {
                y: "-100%",
                duration: 0.8,
            },
            "+=0" // right after the previous
        );

        tl.to(
            `.${styles["second-part"]}`,
            {
                top: "0%",
            },
            "+=0"
        );

        tl.to(`.${styles.container}`, {
            x: "100%",
            onComplete: () => {
                tl.set(`.${styles.container}`, {
                    display: "none",
                });
            },
            delay: 1,
        });
    });

    return (
        <div className={styles.container}>
            <div className={styles["counter"]}>
                <div className={styles["count"]}>
                    <div className={styles["digit"]}>
                        <h1>0</h1>
                    </div>
                    <div className={styles["digit"]}>
                        <h1>0</h1>
                    </div>
                </div>
                <div className={styles["count"]}>
                    <div className={styles["digit"]}>
                        <h1>2</h1>
                    </div>
                    <div className={styles["digit"]}>
                        <h1>7</h1>
                    </div>
                </div>
                <div className={styles["count"]}>
                    <div className={styles["digit"]}>
                        <h1>6</h1>
                    </div>
                    <div className={styles["digit"]}>
                        <h1>5</h1>
                    </div>
                </div>
                <div className={styles["count"]}>
                    <div className={styles["digit"]}>
                        <h1>9</h1>
                    </div>
                    <div className={styles["digit"]}>
                        <h1>8</h1>
                    </div>
                </div>
                <div className={styles["count"]}>
                    <div className={styles["digit"]}>
                        <h1>9</h1>
                    </div>
                    <div className={styles["digit"]}>
                        <h1>9</h1>
                    </div>
                </div>
            </div>

            <div className={styles["second-part"]}>
                <h1 className="text-[35px] lg:text-[80px] text-center text-header-text font-outfit mb-4 lg:mb-10 font-black">
                    HIGHLAND SECURITY SERVICES
                </h1>
                <div className="w-full flex items-center justify-center gap-x-2">
                    <h1
                        className={cn(
                            " font-brush-script text-[40px] lg:text-[100px] p-3",
                            styles["eagle-eye-text"]
                        )}
                    >
                        Eagle Eye
                    </h1>
                    <Image
                        src={"/assets/images/eagle-head.png"}
                        width={100}
                        height={100}
                        alt="landing-eagle"
                        className="object-cover w-[50px] lg:w-[100px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default PreloaderSection;
