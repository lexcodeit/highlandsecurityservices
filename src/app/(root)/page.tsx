"use client";
import BlogSection from "@/components/sections/homepage/blog-section";
import GetHiredSection from "@/components/sections/homepage/get-hired-section";
import HomeAboutSection from "@/components/sections/homepage/home-about-section";
import HomeHeaderSection from "@/components/sections/homepage/home-header-section";
import ServicesSection from "@/components/sections/homepage/services-section";
import ValuesSection from "@/components/sections/homepage/values-section";
import PreloaderSection from "@/components/sections/preloader-section";

export default function Home() {
    return (
        <div>
            <PreloaderSection />

            <HomeHeaderSection />
            <HomeAboutSection />
            <ServicesSection />
            <ValuesSection />
            <GetHiredSection />
            <BlogSection />
        </div>
    );
}
