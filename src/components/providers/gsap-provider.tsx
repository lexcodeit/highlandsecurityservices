"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

export default function GSAPProvider() {
    useLayoutEffect(() => {
        gsap.registerPlugin(
            ScrollTrigger,
            CustomEase,
            ScrollToPlugin,
            SplitText
        );

        // Optional: Global ScrollTrigger defaults
        ScrollTrigger.config({
            ignoreMobileResize: false, // Helps with mobile address bar resizing
        });

        // Ensure all triggers are recalculated if the page layout shifts
        window.addEventListener("load", () => ScrollTrigger.refresh());
    }, []);

    return null;
}
