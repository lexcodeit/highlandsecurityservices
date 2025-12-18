"use client";
import BlogSection from "@/components/sections/homepage/blog-section";
import GetHiredSection from "@/components/sections/homepage/get-hired-section";
import HomeAboutSection from "@/components/sections/homepage/home-about-section";
import HomeHeader2 from "@/components/sections/homepage/home-header-2";
import ServicesSection2 from "@/components/sections/homepage/services-section-2";
import ValuesSection from "@/components/sections/homepage/values-section";
import PreloaderSection from "@/components/sections/preloader-section";
import useLenis from "@/lib/hooks/use-lenis";

export default function Home() {
    useLenis();
    return (
        <div className="overflow-hidden">
            {/* <PreloaderSection /> */}
            <HomeHeader2 />
            <HomeAboutSection />
            <ServicesSection2 />
            <ValuesSection />
            <BlogSection />
            <GetHiredSection />
        </div>
    );
}
