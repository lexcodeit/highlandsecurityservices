"use client";
import BlogSection from "@/components/sections/homepage/blog-section";
import GetHiredSection from "@/components/sections/homepage/get-hired-section";
import HomeHeader2 from "@/components/sections/homepage/home-header-2";
import ServicesSection2 from "@/components/sections/homepage/services-section-2";
import ValuesSection from "@/components/sections/homepage/values-section";
import VettingSection from "@/components/sections/homepage/vetting-section";
import useLenis from "@/lib/hooks/use-lenis";
import AboutIntro from "@/components/sections/homepage/about-intro";
import CEOInvitation from "@/components/sections/homepage/ceo-invitation";
import SectorList from "@/components/sections/homepage/sector-section";
import FeatureSpotlight from "@/components/sections/homepage/feature-spotlight";

export default function Home() {
    useLenis();
    return (
        <div className="overflow-hidden">
            <HomeHeader2 />
            <AboutIntro />
            <CEOInvitation />
            <VettingSection />
            <ServicesSection2 />
            <FeatureSpotlight />
            <ValuesSection />
            <SectorList />
            <BlogSection />
            <GetHiredSection />
        </div>
    );
}
