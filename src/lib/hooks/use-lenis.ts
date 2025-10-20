"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * useLenis - Initializes Lenis smooth scroll on mount.
 *
 * Use this hook at the page or layout level to enable global smooth scrolling.
 * Automatically handles the requestAnimationFrame loop.
 */
export default function useLenis() {
    useEffect(() => {
        // Initialize Lenis with your preferred settings
        const lenis = new Lenis({
            duration: 1.2, // scroll speed (lower = slower)
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth curve
            smoothWheel: true,
        });

        // Animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => lenis.destroy();
    }, []);
}
